import { useSelector } from 'react-redux';
import { RootState } from '@/store/store.ts';
import { useNavigate } from 'react-router-dom';
import { TYPING } from '@/shared/constants/routes.ts';
import {useEffect} from "react";

export const ResultsPage = () => {
  const navigate = useNavigate();
  const results = useSelector((state: RootState) => state.typingTest.results);
  useEffect(() => {
    if (!results) navigate(TYPING);
  }, []);
  return (
    <section>
      <div>Ошибки: {results?.errors}</div>
      <div>WPM: {results?.wpm}</div>
    </section>
  );
};
