import { Routes, Route } from 'react-router-dom';

import Home from './Routes/Home/home.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' index element={<Home />} />
    </Routes>
  );
};

export default App;
