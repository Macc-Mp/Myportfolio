import React, { useState } from 'react'
import '../css/Spinner.css'

export default function Loading({ gifSrc = '/spinner.gif' }) {
  const [imgErrored, setImgErrored] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)

  const showGif = gifSrc && !imgErrored

  return (
    <div className="spinner-overlay" role="status" aria-live="polite">
      {showGif ? (
        <span className="loader"></span>
      ) : (
        <div className="spinner" aria-hidden="true" />
      )}
      
    </div>
  )
}
