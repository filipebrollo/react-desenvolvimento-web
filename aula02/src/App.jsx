// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Alunos from "./components/Alunos"
import ContarPendencias from './components/ContarPendencias'
import ListaPendencia from './components/ListaPendencia'
import { alunos } from './data/alunos'

function App() {

  return (
    /*Se chama fragment o sinmal de <>*/
    <>
      <h1>Saracuruna Upskills</h1>
      <Alunos alunos={alunos} />
      <ListaPendencia alunos={alunos} />
      <ContarPendencias alunos={alunos} />
    </>

  )
}

export default App
