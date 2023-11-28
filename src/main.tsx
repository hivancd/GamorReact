import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.tsx'
import Content from './Content.tsx'
import CreateAccount from './CreateAccount.tsx'
import Login from './Login.tsx'
import './stylesheet.css'


function MainView() {
  const [currView, setView] = useState("main")

  function loginState() {
    setView("login")
  }
  function newAccountState() {
    setView("createAccount")
  }
  function mainState(){
    setView("main")
  }

  if (currView == "main") {
    return (
      <React.StrictMode>
        <Header login={loginState} createAccount={newAccountState}></Header>
        <Content login={loginState} createAccount={newAccountState}></Content>
      </React.StrictMode>
    )
  }
  if (currView == "login") {
    return (
      <Login main={mainState} Link={newAccountState}/>
    )
  }
  if (currView == "createAccount") {
    return (
      <CreateAccount main={mainState} Link={loginState}/>
    )
  }
}
function View() {
  return (
    <MainView />
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(View())
