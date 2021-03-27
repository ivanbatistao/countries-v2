import React, { Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { orderAsc, orderDesc } from "../../actions/index"

import style from "./OrderButtonsName.module.css"


function OrderButtons() {
  const dispatch = useDispatch()

  const { page, continentState } = useSelector((state) => state)
  
  function handleClickAsc(e) {
    e.preventDefault()
    dispatch(orderAsc(page, continentState, "ASC"))
  }

  function handleClickDesc(e) {
    e.preventDefault()
    dispatch(orderDesc(page, continentState, "DESC"))
  }

  return (
    <Fragment>
      <button className={style.searchSubmit} type="button" onClick={(e) => handleClickAsc(e)}>
        A-Z
      </button>
      <button className={style.searchSubmit} type="button" onClick={(e) => handleClickDesc(e)}>
        Z-A
      </button>
    </Fragment>
  )
}

export default OrderButtons
