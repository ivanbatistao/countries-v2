import React from "react"
import { Link } from "react-router-dom"
import "./InitialPage.css"

export default function InitialPage() {
  return (
    <div className="home">
      {/* <img
        className="img-home"
        // src="https://www.vpr.org/sites/vpr/files/styles/x_large/public/201701/Map-countries-istock-ZarkoCvijovic-20170104.jpg"
        // src="https://www.nationsonline.org/gallery/World/World-map-countries-flags.jpg"
        alt="logo-home"
      /> */}
      <Link to="/countries" className="start">
        <div className="start-start-container">
            <div className="start-start">START YOUR JOURNEY HERE</div>
        </div>
      </Link>
    </div>
  )
}