import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './Login/pages/Login.jsx'

import Portal from './Portal/pages/Portal.jsx'

import Answer from './Survey/pages/Answer.jsx'
import Reason from './Survey/pages/Reason.jsx'
import Thanks from './Survey/pages/Thanks.jsx'

import Dashboard from './Dashboard/pages/Dashboard.jsx'
import Detail from './Dashboard/pages/Detail.jsx'

import Admin from './Admin/pages/Admin.jsx'

import Data from './Data/pages/Data.jsx'

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