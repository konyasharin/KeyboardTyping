import { useRef, useState } from 'react';
import { useWords } from '@/hooks/useWords.ts';
import { useCountdownTimer } from '@/hooks/useCountdownTimer.ts';
import { useDispatch } from 'react-redux';
import { setResults } from '@/store/slices/typingTestSlice.ts';
import { useNavigate } from 'react-router-dom';
import { RESULTS } from '@/shared/constants/routes.ts';
import { calculateWpm } from '@/utils/helpers/calculateWpm.ts';
import { createTimeObject } from '@/utils/helpers/createTimeObject.ts';

export type CheckedSymbol = {
  symbol: string;
  status: 'correct' | 'incorrect' | 'notTyped';
};

export const useTypingTest = (time: number) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialTime = useRef(time);
  const [isActive, setIsActive] = useState(false);
  const [typed, setTyped] = useState('');
  const { generatedSymbols, updateSymbols } = useWords();
  const {
    timer,
    setIsActive: setTimerIsActive,
    reset: resetTimer,
  } = useCountdownTimer(time, () => {
    setIsActive(false);
    const checked = checkTyping();
    let errors = 0;
    let correct = 0;
    checked.forEach(elem => {
      if (elem.status === 'incorrect') errors += 1;
      if (elem.status === 'correct') correct += 1;
    });

    dispatch(
      setResults({
        errors,
        wpm: calculateWpm(correct, createTimeObject(initialTime.current)),
      }),
    );
    navigate(RESULTS);
  });

  const setIsActiveHandle = (newIsActive: boolean) => {
    setTimerIsActive(newIsActive);
    setIsActive(newIsActive);
  };

  const restart = () => {
    setIsActiveHandle(false);
    setTyped('');
    resetTimer();
    dispatch(setResults(null));
  };

  const setTypedHandle = (value: string) => {
    if (!isActive && typed.length === 0) {
      setIsActiveHandle(true);
      setTyped(value);
    }
    if (!isActive) return;
    if (value.length > generatedSymbols.length) {
      updateSymbols();
      setTyped('');
      return;
    }
    return setTyped(value);
  };

  const checkTyping = (): CheckedSymbol[] => {
    const checked: CheckedSymbol[] = [];
    generatedSymbols.forEach((symbol, i) => {
      if (i < typed.length) {
        if (symbol === typed.charAt(i))
          checked.push({ symbol, status: 'correct' });
        else checked.push({ symbol, status: 'incorrect' });
      } else {
        checked.push({ symbol, status: 'notTyped' });
      }
    });

    return checked;
  };

  return {
    setTyped: setTypedHandle,
    checkTyping,
    typed,
    generatedSymbols,
    setIsActive: setIsActiveHandle,
    timer,
    isActive,
    restart,
  };
};
