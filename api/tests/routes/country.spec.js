/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai")
const session = require("supertest-session")
const app = require("../../src/app.js")
const { Country, conn } = require("../../src/db.js")

const agent = session(app)

describe("Country routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err)
    })
  )
  // beforeEach(() =>
  //   Country.sync({ force: true }).then(() => Country.create({
  //     id: "COL",
  //     name: "Colombia",
  //     flag: "https://restcountries.eu/data/col.svg",
  //     continent: "Americas",
  //     capital: "Bogota",
  //     subregion: "South America",
  //     area: 1141748,
  //     population: 48759958,
  //   }
  //   ))
  // )
  describe("GET /countries", () => {
    it("should get 200", () => agent.get("/countries").expect(200))
    it("should get 200", () => agent.get("/countries/allCountries").expect(200))
    it("should get 200", () => agent.get("/countries/?name").expect(200))
    it("should get 200", () => agent.get("/countries/?name&&continent").expect(200))
    it("should get 200", () => agent.get("/countries/?continent").expect(200))
    it("should get 200", () => agent.get("/countries/:id").expect(200))
  })
})

describe("Country activity", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err)
    })
  )
  beforeEach(() =>
    TouristActivity.sync({ force: false }).then(() =>
      TouristActivity.create(touristActivity)
    )
  )
})

  describe("POST /activity", () => {
    it("it should responds with 200", (done) => {
      agent
        .post("/activity")
        .send({ name: "Walking",
        difficulty: "4",
        duration: "1",
        season: "Summer",
        countries: ["COL"]
      }).expect(200), done() })
      
      it("it should responds with 404 - recieve an array", (done) => {
        agent
          .post("/activity")
          .send([{ name: "Walking",
          difficulty: "4",
          duration: "1",
          season: "Summer",
          countries: ["COL"]
        }]).expect(404), done() })
})
