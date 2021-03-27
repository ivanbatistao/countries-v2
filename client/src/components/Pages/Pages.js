import React, { Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCountryPagination, changePage } from "../../actions/index"

import style from "./Pages.module.css"

function Pages() {
  const dispatch = useDispatch()
  const { pages, continentState, bottomOrder, orderPop } = useSelector((state) => state)

  function handleClick(event) {
    event.preventDefault()
    if(orderPop !== "") {
      dispatch(changePage(event.target.id))
      return dispatch(getCountryPagination(event.target.id, null, null, orderPop))
    } else {
      dispatch(changePage(event.target.id))
      return dispatch(getCountryPagination(event.target.id, continentState, bottomOrder))
    }
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
