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
import PartThree from './sub-components/participation-three'
import PartFour from './sub-components/participation-four'
//import './App.css'
import './css/index.css'
import Design from './css/main-bg/design';


function App() {
  // Home layout as its own element so routes can switch pages cleanly.
  function Home() {
    return (
      <>
        
        <Design />
     
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
    { path: '/participation/part-three', element: <PartThree /> },
    { path: '/participation/part-four', element: <PartFour /> }
  ])

  return <RouterProvider router={router} />
}
export default App
