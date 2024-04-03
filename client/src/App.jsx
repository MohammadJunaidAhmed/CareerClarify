import './App.css'
import { LoginContextProvider } from './components/Contexts/Login/LoginContext';
import { MainContextProvider } from './components/Contexts/MainContext/MainContext';
import Home from './components/Home/Home';
import TestHome from './components/Home/TestHome';
import Layout from './components/Layout/Layout';
import MyAccount from './components/NavBar/Account/MyAccount/MyAccount';
import ClientProfile from './components/Profiles/ClientProfile/ClientProfile';
import AudioPage from './components/Requests/AudioRequest/AudioPage';
import SearchPage from './components/SearchPage/SearchPage'
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";

function App() {

  return (
    <Router>
      <MainContextProvider>
        <LoginContextProvider>
          <Routes>
            <Route path={`/home`} element={<Navigate to={'/'}/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/test' element={<TestHome/>}/>
            <Route element={<Layout/>}>
              <Route path='/search' element={<SearchPage/>}/>
              <Route path='/client' element={<ClientProfile/>}/>
              <Route path='/account'>
                <Route path='myaccount' element={<MyAccount/>}></Route>
                <Route path='help'></Route>
              </Route>
            </Route>
            <Route path='/requests'>
              <Route path='audio' element={<AudioPage/>}></Route>
              <Route path='video'></Route>
            </Route>
          </Routes>
        </LoginContextProvider>
      </MainContextProvider>
    </Router>
  )
}

export default App
