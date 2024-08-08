import { useState } from 'react';

type UseSelectOptions = {
  initialSelected?: number;
};

export const useSelect = (length: number, options?: UseSelectOptions) => {
  const [selected, setSelected] = useState(options?.initialSelected ?? 0);

  const setSelectedHandle = (newSelected: number) => {
    if (newSelected > length) return setSelected(length - 1);
    if (newSelected < 0) return setSelected(0);
    setSelected(newSelected);
  };

  return { selected, setSelected: setSelectedHandle };
};
