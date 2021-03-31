import React from "react"

import style from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div>
        &copy; Developed with <span>❤️</span> by{" "}
        <a className={style.text} href="https://linkedin.com/in/ivanbatistao" target="_blank" rel="noreferrer">
          Ivan E. Batista-Ochoa.
        </a>
      </div>
    </footer>
  )
}
