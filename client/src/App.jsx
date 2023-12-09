import './App.css'
import { LoginContextProvider } from './components/Contexts/Login/LoginContext';
import Home from './components/Home/Home';
import SearchPage from './components/SearchPage/SearchPage'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {

  return (
    <Router>
      <LoginContextProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<SearchPage/>}/>
        </Routes>
      </LoginContextProvider>
    </Router>
  )
}

export default App
