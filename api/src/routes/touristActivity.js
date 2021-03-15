const { Router } = require("express")
const { Country, TouristActivity } = require("../db")

const app = Router()

app.post("/activity", async (req, res) => {
  try {
    const { id, name, difficulty, duration, season, codes } = req.body
    const countriesID = codes.split(";")

    const touristActivity = await TouristActivity.create({
      id,
      name,
      difficulty,
      duration,
      season,
    })

    countriesID.map(async (codeCountry) => {
      let country = await Country.findOne({
        where: {
          id: codeCountry.toUpperCase(),
        },
      })
      if((await country)){
        await touristActivity.setCountries(country)
      }
    })
    
    res.json({
      message: "Tourist activity was created successfully",
    })
  } catch (error) {
    console.error(error.message)
  }
})

module.exports = app
