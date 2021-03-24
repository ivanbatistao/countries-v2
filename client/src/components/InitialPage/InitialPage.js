import React from "react"
import { Link } from "react-router-dom"
import style from "./InitialPage.module.css"

export default function InitialPage() {
  return (
      <div className={style.startStartContainer}>
        <Link to="/countries">
          <img
            className={style.image}
            src="https://image.freepik.com/psd-gratis/es-momento-viajar-frase-enmarcada-sobre-mapa-mundo_23-2148213026.jpg"
            alt="img-main"
          />
        </Link>
      </div>
  )
}
