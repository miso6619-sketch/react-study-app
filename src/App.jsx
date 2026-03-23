import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ClassPage from './pages/ClassPage'
import TodoPage from './pages/TodoPage'
import Header from './components/Header'
import Footer from './pages/Footer'

function App() {
  return (
    <div className="container">
      <Header />
      <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/class' element={<ClassPage />} />
        <Route path='/todo' element={<TodoPage />} />
      </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App