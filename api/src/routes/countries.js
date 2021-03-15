const { Router } = require("express")
const axios = require("axios")
const { Country, TouristActivity } = require("../db")
const { Op } = require("sequelize")

const app = Router()

app.get("/countries", async (req, res) => {
  try {
    const { name } = req.query

    let countries = await Country.findAll()
    if (countries.length === 0) {
      countries = await axios.get("https://restcountries.eu/rest/v2/all")
      countries = await countries.data.map(async (obj) => {
        await Country.create({
          id: obj.alpha3Code,
          name: obj.name,
          flag: obj.flag,
          continent: obj.region,
          capital: obj.capital,
          subregion: obj.subregion,
          area: parseInt(obj.area) ? parseInt(obj.area) : 0,
          population: obj.population,
        })
      })
    }

    if (!name) {
      const tenCountries = await Country.findAll({
        include: { model: TouristActivity },
        attributes: { exclude: ["createdAt", "updatedAt"] },
        limit: 10,
      })
      res.json(tenCountries)
    } else {
      const matchingCountries = await Country.findAll({
        include: { model: TouristActivity },
        attributes: { exclude: ["createdAt", "updatedAt"] },
        where: {
          name: { [Op.iLike]: `%${name}%` },
        },
      })
      if (matchingCountries.length === 0) {
        res.json({
          messaje: "Country doesn't exist",
        })
      } else {
        res.json(matchingCountries)
      }
    }
  } catch (error) {
    console.error(error.mesage)
  }
})

app.get("/countries/:id", async (req, res) => {
  try {
    const { id } = req.params
    const country = await Country.findByPk(id.toUpperCase(), {
      include: { model: TouristActivity },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    })
    if (country) {
      res.json(country)
    } else {
      res.json({ message: "Country Not Found" })
    }
  } catch (error) {
    console.error(error.message)
  }
})

module.exports = app
