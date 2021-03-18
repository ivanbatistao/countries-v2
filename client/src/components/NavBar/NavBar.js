import React from "react";
import Search from "../Search/Search";
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <div className="nav-bar" >
        <Search />
        <Link to={`/countries/addactivity`}>
          <div>Add Tourist Activity</div>
        </Link>
    </div>
  )
}