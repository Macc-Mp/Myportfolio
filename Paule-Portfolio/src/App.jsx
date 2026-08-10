import React, { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './components/NavBar'
const Header = lazy(() => import('./components/Header'))
const ProjectsBody = lazy(() => import('./components/ProjectsBody'))
const Education = lazy(() => import('./components/Education'))
const Footer = lazy(() => import('./components/Footer'))
import ResumeReader from './components/ResumeReader'
//routes for participation pages
import { PartOne, PartTwo, PartThree, PartFour, PartFive } from './sub-components/participation'

//import './App.css'
import './css/index.css'
import Design from './css/main-bg/design';
import ScrollProgress from './components/ScrollProgress'

// Graceful fallback for route-level errors so the React Router
// default ErrorBoundary never flashes an "Unexpected Application Error".
function RouteErrorBoundary() {
  return (
    <div style={{ color: '#e7ebff', textAlign: 'center', padding: '4rem 1.5rem', fontFamily: 'sans-serif' }}>
      <h2>Something went wrong.</h2>
      <p>
        <a href="/" style={{ color: '#00d4ff' }}>Go back to the site</a>
      </p>
    </div>
  )
}


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
            <Footer />
          </Suspense>
        </div>
      </>
    )
  }

  // loading screen disabled


  const router = createBrowserRouter([
    { path: '/', element: <Home />, errorElement: <RouteErrorBoundary /> },
    { path: '/participation', element: <PartOne/>, errorElement: <RouteErrorBoundary /> },
    { path: '/participation/part-two', element: <PartTwo/>, errorElement: <RouteErrorBoundary /> },
    { path: '/participation/part-three', element: <PartThree/>, errorElement: <RouteErrorBoundary /> },
    { path: '/participation/part-four', element: <PartFour/>, errorElement: <RouteErrorBoundary /> },
    { path: '/participation/part-five', element: <PartFive/>, errorElement: <RouteErrorBoundary /> },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true, // It's good practice to opt-in to this one as well
    },
  }
)

  // Always render the decorative background. The Design component renders into a portal.
  return (
    <>
      <Design />
      <ScrollProgress />
      <RouterProvider router={router} />
    </>
  )
}
export default App
