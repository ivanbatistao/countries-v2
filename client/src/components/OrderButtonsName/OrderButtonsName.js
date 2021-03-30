import React from "react"
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai"
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
    <div className={style.containerName}>
      <button
        title="Order countries ascendent by name"
        className={style.searchSubmit}
        type="button"
        onClick={(e) => handleClickAsc(e)}
      >
        <AiOutlineSortAscending />
      </button>
      <button
        title="Order countries descendent by name"
        className={style.searchSubmit}
        type="button"
        onClick={(e) => handleClickDesc(e)}
      >
        <AiOutlineSortDescending />
      </button>
    </div>
  )
}

export default OrderButtons
