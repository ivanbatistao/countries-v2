const { Router } = require("express")
const axios = require("axios")
const { Country, TouristActivity } = require("../db")
const { Op } = require("sequelize")

const app = Router()

app.get("/countries", async (req, res) => {
  try {
    const { name, page, activity, continent, order, population } = req.query

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

    if (population && page) {
      const pageSize = 10
      if (population === "ASC") {
        const allCountriesPage = await Country.findAll({
          include: { model: TouristActivity },
          attributes: { exclude: ["createdAt", "updatedAt"] },
          order: [["population", "ASC"]],
          limit: pageSize,
          offset: page * pageSize,
        })
        if (allCountriesPage.length > 0) {
          res.json(allCountriesPage)
        }
      } else if (population === "DESC") {
        const allCountriesPage = await Country.findAll({
          include: { model: TouristActivity },
          attributes: { exclude: ["createdAt", "updatedAt"] },
          order: [["population", "DESC"]],
          limit: pageSize,
          offset: page * pageSize,
        })
        if (allCountriesPage.length > 0) {
          res.json(allCountriesPage)
        }
      }
    }

    if (activity) {
      const allCountriesActivity = await TouristActivity.findAll({
        where: {
          name: { [Op.iLike]: `${activity}` },
        },
        include: { model: Country },
        attributes: {
          exclude: [
            "createdAt",
            "updatedAt",
            "id",
            "name",
            "difficulty",
            "duration",
            "season",
          ],
        },
      })
      if (allCountriesActivity.length > 0) {
        res.json(allCountriesActivity)
      } else {
        res.json({ message: "Activity Not Found" })
      }
    }

    if (page && (continent === "all" || continent === "")) {
      const pageSize = 10
      if (order === "ASC" || order === "") {
        const allCountriesPage = await Country.findAll({
          include: { model: TouristActivity },
          attributes: { exclude: ["createdAt", "updatedAt"] },
          order: [["name", "ASC"]],
          limit: pageSize,
          offset: page * pageSize,
        })
        if (allCountriesPage.length > 0) {
          res.json(allCountriesPage)
        }
      } else {
        const allCountriesPage = await Country.findAll({
          include: { model: TouristActivity },
          attributes: { exclude: ["createdAt", "updatedAt"] },
          order: [["name", "DESC"]],
          limit: pageSize,
          offset: page * pageSize,
        })
        if (allCountriesPage.length > 0) {
          res.json(allCountriesPage)
        }
      }
    }

    if (page && continent && continent !== "all") {
      const pageSize = 10
      if (order === "ASC" || order === "") {
        const allCountriesPage = await Country.findAll({
          where: {
            continent: { [Op.iLike]: `%${continent}` },
          },
          include: { model: TouristActivity },
          attributes: { exclude: ["createdAt", "updatedAt"] },
          order: [["name", "ASC"]],
          limit: pageSize,
          offset: page * pageSize,
        })
        if (allCountriesPage.length > 0) {
          res.json(allCountriesPage)
        }
      } else {
        const allCountriesPage = await Country.findAll({
          where: {
            continent: { [Op.iLike]: `%${continent}` },
          },
          include: { model: TouristActivity },
          attributes: { exclude: ["createdAt", "updatedAt"] },
          order: [["name", "DESC"]],
          limit: pageSize,
          offset: page * pageSize,
        })
        if (allCountriesPage.length > 0) {
          res.json(allCountriesPage)
        }
      }
    }

    if (!name) {
      const tenCountries = await Country.findAll({
        include: { model: TouristActivity },
        attributes: { exclude: ["createdAt", "updatedAt"] },
        order: [["name", "ASC"]],
        limit: 10,
        offset: 0,
      })
      res.json(tenCountries)
    } else {
      const matchingCountries = await Country.findAll({
        include: { model: TouristActivity },
        attributes: { exclude: ["createdAt", "updatedAt"] },
        where: {
          name: { [Op.iLike]: `%${name}%` },
        },
        order: [["name", "DESC"]],
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
      order: [["name", "ASC"]],
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

app.get("/allCountries", async (req, res) => {
  const { continent } = req.query
  if (continent !== "all") {
    const allCountries = await Country.findAll({
      include: { model: TouristActivity },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [["name", "ASC"]],
    })
    if (allCountries.length > 0) {
      res.json(allCountries)
    }
  } else {
    const tenCountries = await Country.findAll({
      include: { model: TouristActivity },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [["name", "ASC"]],
      limit: 10,
    })
    res.json(tenCountries)
  }
})

module.exports = app