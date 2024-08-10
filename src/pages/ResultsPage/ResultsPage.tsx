import { useSelector } from 'react-redux';
import { RootState } from '@/store/store.ts';
import { useNavigate } from 'react-router-dom';
import { TYPING } from '@/shared/constants/routes.ts';
import { useEffect } from 'react';
import { RestartIcon } from '@/components/icons/RestartIcon.tsx';
import { Button } from '@/components/ui/Button/Button.tsx';
import clsx from 'clsx';
import styles from './ResultsPage.module.css';

export const ResultsPage = () => {
  const navigate = useNavigate();
  const results = useSelector((state: RootState) => state.typingTest.results);
  useEffect(() => {
    if (!results) navigate(TYPING);
  }, []);
  return (
    <section>
      <div className={styles.text}>
        <div className={'text_upper'}>WPM: {results?.wpm}</div>
        <div className={clsx('text_upper', styles.errors)}>
          Ошибки: {results?.errors}
        </div>
      </div>
      <Button
        onClick={() => navigate(TYPING)}
        className={styles.restart_button}
      >
        <RestartIcon />
      </Button>
    </section>
  );
};
