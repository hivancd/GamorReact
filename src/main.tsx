import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header/Header.tsx'
import Content from './Content/Content.tsx'
import CreateAccount from './Authentification/CreateAccount.tsx'
import Login from './Authentification/Login.tsx'
import './stylesheet.css'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
// import fetch from 'node-fetch'


function Main() {
  return(
    <React.StrictMode>
        <Header ></Header>
        <Content></Content>
      </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
    <Route path='/'>
      <Route index element={<Main/>}></Route>
      <Route path='Login' element={<Login/>}></Route>
      <Route path='CreateAccount' element={<CreateAccount/>}></Route>
    </Route>
  </Routes>
  </BrowserRouter>
)
