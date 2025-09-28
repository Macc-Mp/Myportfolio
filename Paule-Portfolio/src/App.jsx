import { useState } from 'react'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Header from './components/Header'
import ProjectsBody from './components/ProjectsBody'
import Education from './components/Education'
//import './App.css'
import './css/index.css'


function App() {
  return (
    <>
      <div>
        <NavBar />
        <Header />
        <Skills />
        <ProjectsBody />
        <Education />
        <Footer />
      </div>
      

      

      

      

    </>
  )
}

export default App
