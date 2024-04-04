import './App.css'
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Sidebar from './components/Sidebar/Sidebar'
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
