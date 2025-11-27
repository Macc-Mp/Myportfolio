import React, { useState } from 'react'
import '../css/Spinner.css'

// Loading component accepts optional `gifSrc` prop (URL). If a GIF is
// provided and successfully loads, it will be shown. On error the CSS
// spinner fallback is used.
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
