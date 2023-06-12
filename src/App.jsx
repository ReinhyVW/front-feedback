import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './login/pages/Login'

import Portal from './Portal/pages/Portal'

import Answer from './Survey/pages/Answer'
import Reason from './Survey/pages/Reason'
import Thanks from './Survey/pages/Thanks'

import Dashboard from './Dashboard/pages/Dashboard'
import Detail from './Dashboard/pages/Detail'

import Admin from './Admin/pages/Admin'

import Data from './Data/pages/Data'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path='/portal' element={<Portal />} />
        <Route path='/survey' element={<Answer />} />
        <Route path='/reason' element={<Reason />} />
        <Route path='/thanks' element={<Thanks />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/data' element={<Data />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App