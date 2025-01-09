import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  
  return (
    <>
      <GeneralInfo/>
      <Education/>
      <Experience/>
    </>
  )
}

export default App
