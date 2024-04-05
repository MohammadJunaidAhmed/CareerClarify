import './App.css'
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Page1 from './components/Pages/Page1';
import Page2 from './components/Pages/Page2';
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Navigate to={'/'}/>}></Route>
          <Route path='/page1' element={<Page1/>}></Route>
          <Route path='/page2' element={<Page2/>}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
