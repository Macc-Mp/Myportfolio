import React from 'react'
import '../css/Spinner.css'

export default function Loading() {
  return (
    <div className="spinner-overlay" role="status" aria-live="polite">
      <div className="spinner" aria-hidden="true"></div>
      {/* <span className="visually-hidden">Loading...</span> */}
    </div>
  )
}
