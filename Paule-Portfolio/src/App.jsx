import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Header from './components/Header'
import ProjectsBody from './components/ProjectsBody'
import Education from './components/Education'
import ResumeReader from './components/ResumeReader'
import Participation from './components/Participation'

//routes for participation pages
import PartOne from './sub-components/participation-one'
import PartTwo from './sub-components/participation-two'
//import './App.css'
import './css/index.css'


function App() {
  // Home layout as its own element so routes can switch pages cleanly.
  function Home() {
    return (
      <>
        <NavBar />
        <Header />
        <Skills />
        <ProjectsBody />
        <Education />
        <ResumeReader />
        <Participation />
        <Footer />
      </>
    )
  }

  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/participation', element: <PartOne /> },
    { path: '/participation/part-two', element: <PartTwo /> },
  ])

  return <RouterProvider router={router} />
}
export default App
