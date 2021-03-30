import React from "react"
import style from "./InitialPage.module.css"

export default function InitialPage() {
  return (
      <div className={style.startStartContainer}>
          <img
            className={style.image}
            src="https://images.pexels.com/photos/346696/pexels-photo-346696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="img-main"
          />
      </div>
  )
}
