import React, { Fragment } from "react"
import { connect, useDispatch, useSelector } from "react-redux"
// import style from './Cards.module.css'
import { getCountryPagination } from "../../actions/index"

function Pages() {
  const dispatch = useDispatch()
  const { pages, continentState } = useSelector((state) => state)

  function handleClick(event) {
    event.preventDefault()
    dispatch(getCountryPagination(event.target.id, continentState))
  }

  return (
    <Fragment>
      <div>
        {pages.map((page, id) => (
          <button key={id} id={page} onClick={(e) => handleClick(e)}>
            {page + 1}
          </button>
        ))}
      </div>
    </Fragment>
  )
}

export default Pages
