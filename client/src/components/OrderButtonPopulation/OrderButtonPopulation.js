import React, { Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { orderPopulation } from "../../actions/index"

import style from "./OrderButtonPopulation.module.css"

function OrderButtonPopulation() {
  const dispatch = useDispatch()
  const { orderPop } = useSelector((state) => state)

  function handleClick(e) {
    e.preventDefault()
    if (orderPop === true) {
      dispatch(orderPopulation(false))
    } else {
      dispatch(orderPopulation(true))
    }
  }

  return (
    <Fragment>
      <button
        className={style.searchSubmit}
        type="button"
        onClick={(e) => handleClick(e)}
      >
        ORDER THIS PAGE BY POPULATION
      </button>
    </Fragment>
  )
}

export default OrderButtonPopulation
