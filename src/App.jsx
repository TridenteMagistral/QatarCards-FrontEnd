import './index.css';
import Home from './components/Home/Home';
import Login from './components/SignIn/Login';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className='app' >
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;