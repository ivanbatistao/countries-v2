import React, { Fragment } from "react"
import { useDispatch } from "react-redux"
import { orderAsc, orderDesc } from "../../actions/index"

import style from "./OrderButtons.module.css"


function OrderButtons() {
  const dispatch = useDispatch()

  function handleClickAsc(e) {
    e.preventDefault()
    dispatch(orderAsc())
  }

  function handleClickDesc(e) {
    e.preventDefault()
    dispatch(orderDesc())
  }

  return (
    <Fragment>
      <button className={style.searchSubmit} type="button" onClick={(e) => handleClickAsc(e)}>
        ORDER THIS PAGE ASC
      </button>
      <button className={style.searchSubmit} type="button" onClick={(e) => handleClickDesc(e)}>
        ORDER THIS PAGE DESC
      </button>
    </Fragment>
  )
}

export default OrderButtons
