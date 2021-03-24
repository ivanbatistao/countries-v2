import React, { Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCountryPagination } from "../../actions/index"

import style from "./Pages.module.css"

function Pages() {
  const dispatch = useDispatch()
  const { pages, continentState } = useSelector((state) => state)

  function handleClick(event) {
    event.preventDefault()
    dispatch(getCountryPagination(event.target.id, continentState))
  }

  if (pages === "") {
    return (<Fragment></Fragment>)
  } else {
    return (
      <div className={style.pages}>
        {pages.map((page, id) => (
          <button className={style.searchSubmit} key={id} id={page} onClick={(e) => handleClick(e)}>
            {page + 1}
          </button>
        ))}
      </div>
    )
  }
}

export default Pages
