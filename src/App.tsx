import './App.css';
import { Route, Routes } from 'react-router-dom';
import { TYPE } from '@/shared/constants/routes.ts';
import { TypePage } from '@/pages/TypePage/TypePage.tsx';
import { Container } from '@/components/layouts/Container/Container.tsx';

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path={TYPE} element={<TypePage />} />
      </Routes>
    </Container>
  );
};

export default App;
