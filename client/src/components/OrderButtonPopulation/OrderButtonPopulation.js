import React, { Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ImSortNumericAsc, ImSortNumbericDesc } from "react-icons/im"
import { IoIosPeople } from "react-icons/io"
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
  } else {
    return (
      <div className={style.containerPop}>
        <button
          title="Order countries ascendent by population"
          className={style.searchSubmit}
          type="button"
          onClick={(e) => handleClickAsc(e)}
        >
          <ImSortNumericAsc />
          <IoIosPeople />
        </button>
        <button
          title="Order countries descendent by population"
          className={style.searchSubmit}
          type="button"
          onClick={(e) => handleClickDesc(e)}
        >
          <ImSortNumbericDesc />

          <IoIosPeople />
        </button>
      </div>
    )
  }
}

export default OrderButtonPopulation
