import './App.css'
import mainContext, { MainContextProvider } from './components/Contexts/MainContext';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import SignIn from './components/Login/SignIn/SignIn';
import SignUp from './components/Login/SignUp/SignUp';
import Orders from './components/Orders/Orders';
import Page1 from './components/Pages/Page1';
import Page2 from './components/Pages/Page2';
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import PageNotFound from './components/Pages/PageNotFound';
import { LoginContextProvider } from './components/Contexts/LoginContext';
import Services from './components/Services/Services';

function App() {
  const token = localStorage.getItem('jwtToken');
  const profId = localStorage.getItem('userId');
  return (
    <Router>
      <LoginContextProvider >
        <MainContextProvider>
          <Routes>
            <Route path='/signin' element={<SignIn/>}></Route>
            <Route path='/login' element={<Navigate to='/signin'/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/register' element={<Navigate to='/signup'/>}></Route>
              <Route element={<Layout/>}>
                <Route path='/' element={<Home />}></Route>
                <Route path='/home' element={<Navigate to={'/'}/>}></Route>
                <Route path='/orders' element={<Orders/>}></Route>
                <Route path='/myservices' element={<Services/>}></Route>
                <Route path='/page1' element={<Page1/>}></Route>
                <Route path='/page2' element={<Page2/>}></Route>
              </Route>
            <Route path='*' element={<Navigate to='/signin'/>}/>
          </Routes>
        </MainContextProvider>
      </LoginContextProvider>
    </Router>
  )
}

export default App
