import './App.css';
import {BrowserRouter,Routes,Route,}from 'react-router-dom'

import UserSignUP from './pages/user-signup';
import UserLogin from './pages/user-login';
import UserLandingPage from './pages/user-landing-page';
import AdminLanding from './pages/admin/admin-landing';
import Login from './pages/admin/login';
import AddMenu from './components/admin/add-menu';
import AdminUsers from './pages/admin/admin-users';
// import UserPro from './pages/user-pro';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>

   <Route path='/user/signup' element={<UserSignUP/>} />
   <Route path='/user/login' element={<UserLogin/>} />
   <Route path='/user/landing-page' element={<UserLandingPage/>} />
   
   <Route path='/admin/landing-page' element={<AdminLanding/>} />
   <Route path='/admin/login' element={<Login/>} />
   <Route path='/admin/add-menu' element={<AddMenu/>} />
   <Route path='/admin/view-users' element={<AdminUsers/>} />
   {/* <Route path='/admin/user-pro' element={<UserPro/>} /> */}
   






    </Routes>
    
    </BrowserRouter>
   </div>
  );
}

export default App;
