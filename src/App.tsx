import './App.css';
import { Route, Routes } from 'react-router-dom';
import { RESULTS, TYPING } from '@/shared/constants/routes.ts';
import { TypingPage } from '@/pages/TypingPage/TypingPage.tsx';
import { Container } from '@/components/layouts/Container/Container.tsx';
import { ResultsPage } from '@/pages/ResultsPage/ResultsPage.tsx';

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path={TYPING} element={<TypingPage />} />
        <Route path={RESULTS} element={<ResultsPage />} />
      </Routes>
    </Container>
  );
};

export default App;
