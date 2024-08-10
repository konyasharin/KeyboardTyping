import { useCallback, useEffect, useRef, useState } from 'react';
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

const generateChecked = (generatedSymbols: string[]) => {
  const generated: (CheckedSymbol & { id: number })[] = [];
  generatedSymbols.forEach((symbol, i) => {
    generated.push({ symbol, status: 'notTyped', id: i });
  });

  return generated;
};

export const useTypingTest = (time: number) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialTime = useRef(time);
  const [isActive, setIsActive] = useState(false);
  const [typed, setTyped] = useState('');
  const { generatedSymbols, updateSymbols } = useWords();
  const [checked, setChecked] = useState(generateChecked(generatedSymbols));
  const {
    timer,
    setIsActive: setTimerIsActive,
    reset: resetTimer,
  } = useCountdownTimer(time, () => {
    setIsActive(false);
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

  useEffect(() => {
    checkTyping();
  }, [typed]);

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

  const setTypedHandle = useCallback(
    (value: string) => {
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
      setTyped(value);
    },
    [generatedSymbols, isActive, typed],
  );

  const checkTyping = () => {
    setChecked(
      checked.map((elem, i) => {
        if (i <= typed.length - 1) {
          if (elem.symbol === typed.charAt(i))
            return { ...elem, status: 'correct' };
          else return { ...elem, status: 'incorrect' };
        } else {
          return { ...elem, status: 'notTyped' };
        }
      }),
    );
  };

  return {
    setTyped: setTypedHandle,
    checked,
    typed,
    generatedSymbols,
    setIsActive: setIsActiveHandle,
    timer,
    isActive,
    restart,
  };
};
