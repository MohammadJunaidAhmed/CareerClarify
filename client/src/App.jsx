import './App.css'
import { LoginContextProvider } from './components/Contexts/Login/LoginContext';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import ClientProfile from './components/Profiles/ClientProfile/ClientProfile';
import SearchPage from './components/SearchPage/SearchPage'
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";

function App() {

  return (
    <Router>
      <LoginContextProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path={`/home`} element={<Navigate to={'/'}/>}/>
          <Route element={<Layout/>}>
            <Route path='/search' element={<SearchPage/>}/>
            <Route path='/client' element={<ClientProfile/>}/>
          </Route>
        </Routes>
      </LoginContextProvider>
    </Router>
  )
}

export default App
