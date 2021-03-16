const { Router } = require("express")
const { Country, TouristActivity } = require("../db")

const app = Router()

app.post("/activity", async (req, res) => {
    // validar que venga algo por req.body
    // if(!req.body)
    // responder con error
  try {
    let { id, name, difficulty, duration, season, codes } = req.body
    countriesId = codes.split(", ")

    const touristActivity = await TouristActivity.create({
      id,
      name,
      difficulty,
      duration,
      season,
    })

    countriesId.map(async (countryObj) => {
      let country = await Country.findOne({
        where: {
          id: countryObj.toUpperCase(), // COLOCAR EN EL FRONT UN FORMULARIO CONTROLADO
        },
      })

      if((country)){
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
