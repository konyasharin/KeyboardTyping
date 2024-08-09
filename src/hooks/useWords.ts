import { getRandom } from '@/utils/helpers/getRandom.ts';
import { useState } from 'react';
import { NUMBER_OF_WORDS } from '@/shared/constants/values.ts';

const generateWord = (words: string[]) => {
  const word = words[getRandom(0, words.length - 1)];
  const symbols: string[] = [];
  for (let i = 0; i < word.length; i++) {
    symbols.push(word[i]);
  }
  return symbols;
};

const generateSymbols = (words: string[]) => {
  let symbols: string[] = [];
  for (let i = 0; i < NUMBER_OF_WORDS; i++) {
    symbols = symbols.concat(generateWord(words));
    if (i != NUMBER_OF_WORDS - 1) symbols.push(' ');
  }
  return symbols;
};

export const useWords = () => {
  const words = ['some', 'text', 'ball', 'hello', 'understand', 'time'];
  const [generatedSymbols, setGeneratedSymbols] = useState(
    generateSymbols(words),
  );

  const updateSymbols = () => {
    setGeneratedSymbols(generateSymbols(words));
  };

  return { updateSymbols, generatedSymbols };
};
