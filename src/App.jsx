import Header from './components/Header/Header';
import Error404 from './pages/Error404/404';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Log from './pages/Log/Log';
import Info from './pages/Info/Info';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quiz from './pages/Quiz/Info';
import Perfil from './pages/Perfil/Perfil';

function App() {
  return (
    <>
      <Perfil />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
