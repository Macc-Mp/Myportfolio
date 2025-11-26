import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Header from './components/Header'
import ProjectsBody from './components/ProjectsBody'
import Education from './components/Education'
import ResumeReader from './components/ResumeReader'
import Participation from './components/Participation'
import Loading from './components/Loading'

//routes for participation pages
import { PartOne, PartTwo, PartThree, PartFour } from './sub-components/participation'

//import './App.css'
import './css/index.css'
import './css/Spinner.css'
import Design from './css/main-bg/design';


function App() {
  // Home layout as its own element so routes can switch pages cleanly.
  function Home() {
    return (
      <>
          <div className="page-content">
          <NavBar />
          <Header />
          <Skills />
          <ProjectsBody />
          <Education />
          {/* <ResumeReader /> */}
          <Participation />
          <Footer />
          </div>
      
      </>
    )
  }

  // show a loading spinner for 5 seconds on initial app mount
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(t)
  }, [])

  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/participation', element: <PartOne/> },
    { path: '/participation/part-two', element: <PartTwo/> },
    { path: '/participation/part-three', element: <PartThree/> },
    { path: '/participation/part-four', element: <PartFour/> },
  ])

  // Always render the decorative background so it can animate while the
  // app shows the spinner. The Design component renders into a portal.
  return (
    <>
      <Design />
      {loading ? <Loading /> : <RouterProvider router={router} />}
    </>
  )
}
export default App
