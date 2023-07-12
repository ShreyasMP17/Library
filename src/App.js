import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './components/landingPage';
import AdminLogin from './components/adminLogin';
import UserLogin from './components/userLogin';
import AdminPortal from './components/adminPortal';
import UserPortal from './components/userPortal';

function App() {
  return (
      <div className="App">
        <BrowserRouter>

        <Routes>
          <Route path="/library/" element={<LandingPage/>} />
          <Route path="/library/admin-login" element={<AdminLogin/>} />
          <Route path="/library/user-login" element={<UserLogin/>}/>
          <Route path="/library/admin/*" element={<AdminPortal/>}/>
          <Route path="/library/user/*" element={<UserPortal/>}/>
        </Routes>
        </BrowserRouter>

      </div>
  );
}

export default App;
