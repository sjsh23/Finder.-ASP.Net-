import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Header from './component/Header'
import Footer from './component/Footer/Footer'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import KostListPage from './pages/KostPage'
import DetailPage from './pages/DetailPage'

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/RegisterPage' element={<RegisterPage />}/>
            <Route path='/LoginPage' element={<LoginPage />}/>
            <Route path='/KostPage' element={<KostListPage />}/>
            <Route path='/DetailPage' element={<DetailPage />}/>
        </Routes>
      <Footer />
    </Router>   
  )
}

export default App