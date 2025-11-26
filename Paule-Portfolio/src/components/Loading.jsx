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
        <img
          src={gifSrc}
          alt="Loading"
          className="spinner-gif"
          onError={() => setImgErrored(true)}
          onLoad={() => setImgLoaded(true)}
        />
      ) : (
        <div className="spinner" aria-hidden="true" />
      )}
      
    </div>
  )
}
