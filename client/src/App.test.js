// import { render, screen } from "@testing-library/react"
// import App from "./App"
// import { Link } from "react-router-dom"
const { expect } = require("chai")
import { configure, shallow } from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"

configure({ adapter: new Adapter() })

import App from "./App"
import Home from "./components/Home/Home"

describe("App", () => {
  let wrapper = shallow(<App />)
  it("should be a function", () => {
    expect(App).to.be.a("function")
  })
  it("should render a header", () => {
    expect(wrapper.find("header"))
  })
  it("should have the component NavBar", () => {
    expect(wrapper.find("NavBar"))
  })
  it("should have the component NavBarWelcome", () => {
    expect(wrapper.find("NavBarWelcome"))
  })
  it("should have the component InitialPage", () => {
    expect(wrapper.find("InitialPage"))
  })
  it("should have the component Search", () => {
    expect(wrapper.find("Search"))
  })
  it("should have the component FilterByTouristActivity", () => {
    expect(wrapper.find("FilterByTouristActivity"))
  })
  it("should have the component FilterByContinent", () => {
    expect(wrapper.find("FilterByContinent"))
  })
  it("should have the component OrderButtons", () => {
    expect(wrapper.find("OrderButtons"))
  })
})

describe("Home", () => {
  let wrapper = shallow(<Home />)
  it("should be a function", () => {
    expect(Home).to.be.a("function")
  })
  it("should render a div", () => {
    expect(wrapper.find("div"))
  })
  it("should render a NavBar", () => {
    expect(wrapper.find("NavBar"))
  })
})
