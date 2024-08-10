import './App.css';
import { Route, Routes } from 'react-router-dom';
import { RESULTS, TYPING } from '@/shared/constants/routes.ts';
import { TypingPage } from '@/pages/TypingPage/TypingPage.tsx';
import { Container } from '@/components/layouts/Container/Container.tsx';
import { ResultsPage } from '@/pages/ResultsPage/ResultsPage.tsx';

const App = () => {
  return (
    <main className={'main'}>
      <Container className={'main_container'}>
        <Routes>
          <Route path={TYPING} element={<TypingPage />} />
          <Route path={RESULTS} element={<ResultsPage />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
