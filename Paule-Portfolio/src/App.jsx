import React, { useState, useEffect, Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './components/NavBar'
import Loading from './components/Loading'
const Header = lazy(() => import('./components/Header'))
const ProjectsBody = lazy(() => import('./components/ProjectsBody'))
const Education = lazy(() => import('./components/Education'))
const Participation = lazy(() => import('./components/Participation'))
const Footer = lazy(() => import('./components/Footer'))
import ResumeReader from './components/ResumeReader'

//routes for participation pages
import { PartOne, PartTwo, PartThree, PartFour, PartFive } from './sub-components/participation'

//import './App.css'
import './css/index.css'
import './css/Spinner.css'
import Design from './css/main-bg/design';
import ScrollProgress from './components/ScrollProgress'


function App() {
  // Home layout as its own element so routes can switch pages cleanly.
  function Home() {
    return (
      <>
        <div id="home" className="page-content">
          <NavBar />
          <Suspense fallback={<div className="suspense-fallback" />}>
            <Header />
            <ProjectsBody />
            <Education />
            {/* <ResumeReader /> */}
            <Participation />
            <Footer />
          </Suspense>
        </div>
      </>
    )
  }

  // show spinner for a short launch animation
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
    { path: '/participation/part-five', element: <PartFive/> },
  ])

  // Always render the decorative background so it can animate while the
  // app shows the spinner. The Design component renders into a portal.
  return (
    <>
      <Design />
      <ScrollProgress />
      {loading ? <Loading /> : <RouterProvider router={router} />}
    </>
  )
}
export default App
