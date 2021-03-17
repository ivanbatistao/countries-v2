import React, { Fragment } from "react"
import { connect, useSelector } from "react-redux"
// import style from './Cards.module.css'
import Country from "../Country/Country"

export default function Search() {
    const { countriesSearch } = useSelector((state) => state)
  
      return (
          <div>
            {countriesSearch.length > 0 ? countriesSearch.map((country) => (
                <Country
                  key={country.id}
                  id={country.id}
                  flag={country.flag}
                  name={country.name}
                  continent={country.continent}
                />
              )) : <p>There are no countries to display</p>}
          </div>
      )
  }