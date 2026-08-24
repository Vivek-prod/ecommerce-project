import { HomePage } from './Pages/HomePage'
import './App.css'
import { Routes,Route } from 'react-router'

function App() {
  return (
    <Routes>
      {/* index do the same thing as path="/" */}
      <Route index element={<HomePage />} />
      <Route  path="checkout" element={<div>Test</div>} />
    </Routes>
    
  )
}

export default App
