import React, { Fragment } from "react"
import { useDispatch } from "react-redux"
import { orderAsc, orderDesc } from "../../actions/index"

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
      <button type="button" onClick={(e) => handleClickAsc(e)}>
        ORDER ASC
      </button>
      <button type="button" onClick={(e) => handleClickDesc(e)}>
        ORDER DESC
      </button>
    </Fragment>
  )
}

export default OrderButtons
