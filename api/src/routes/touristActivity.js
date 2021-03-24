const { Router } = require("express")
const { Country, TouristActivity } = require("../db")
const { Op } = require("sequelize")

const app = Router()

app.post("/activity", async (req, res) => {
  // validar que venga algo por req.body
  // if(!req.body)
  // responder con error
  try {
    let { name, difficulty, duration, season, countries } = req.body

    const touristActivity = await TouristActivity.create({
      name,
      difficulty,
      duration,
      season,
    })


    countries.map(async (countryObj) => {
      let country = await Country.findOne({
        // where: {
        //   name: { [Op.iLike]: `${countryObj}` },
        // },
        where: {
          id: countryObj.toUpperCase(),
        },
      })
      if (country) {
        await touristActivity.setCountries(country)
      }
    })

    res.json({
      message: "Tourist activity was created successfully for valid countries",
    })
  } catch (error) {
    console.error(error.message)
  }
})

module.exports = app
