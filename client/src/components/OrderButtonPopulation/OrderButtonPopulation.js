import React, { Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { orderPopulationAsc, orderPopulationDesc } from "../../actions/index"

import style from "./OrderButtonPopulation.module.css"

function OrderButtonPopulation() {
  const dispatch = useDispatch()

  const { page, continentState } = useSelector((state) => state)

  function handleClickAsc(e) {
    e.preventDefault()
    dispatch(orderPopulationAsc(page, "ASC"))
  }

  function handleClickDesc(e) {
    e.preventDefault()
    dispatch(orderPopulationDesc(page, "DESC"))
  }

  if (continentState !== "all" && continentState !== "") {
    return <Fragment></Fragment>
  }
  
  else {return (
    <Fragment>
    <button className={style.searchSubmit} type="button" onClick={(e) => handleClickAsc(e)}>
      POP ASC
    </button>
    <button className={style.searchSubmit} type="button" onClick={(e) => handleClickDesc(e)}>
      POP DESC
    </button>
  </Fragment>
  ) }
}

export default OrderButtonPopulation
