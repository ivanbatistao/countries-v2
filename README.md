# __App Countries__

<p align="left">
  <img height="200" src="./countries.png" />
</p>

## __Objectives of the project__

- Build an App using React, Redux, Node Sequelize - PostgreSQL.
- Learn new and best practices.
- Learn and practice GIT workflow.
- Use and practice testing.

**NOTE**: All feedback is very welcome!


### __General information about the App__

The general idea was to build and aplication in which anyone can see information about different countries using the external API [restcountries](https://restcountries.eu/) and work on the following features:

  - Look for countries
  - Filter and order countries
  - Create tourist activities for countries


#### __Frontend__

Developed a React - Redux App that has the following routes: 

__Initial Page__: Landing page with:
- NavBar that let the users go to another routes
- A representative image
- And a footer that redirect to my LinkedIn profile

__Main Route__: Contains:
- A search input to find countries by name
- Area in which the countries are displayed. When starting, this section shows the first 10 countries with their flag, name and continent
- Bottoms/Options to filter by continent and tourist activity
- Bottoms/Options to order the countries ascendent and descendant by name and by population
- Pagination to show the following countries

__Details Country Route__: Contains information about the selected country:
- Country code (id)
- Capital
- Subregion
- Area (Km2)
- Population
- Tourist activities and its associated informationActividades turísticas

__Tourist Activity Creation Route__: Contains
- A __controlled__ form with the following:
  - Name (tourist activity)
  - Difficulty
  - Duration
  - Season
- Possibility to add various countries ad the same time
- Bottom/Option to create a new tourist activity

#### __Database__

I get the information from the external API and added it to my own database. The database model contains the following entities:

- Country table with the following properties:
  - ID
  - Name
  - Flag
  - Continent
  - Capital
  - Subregion
  - Area
  - Population
- Tourist activity table with the following propierties:
  - ID
  - Name
  - Difficulty (between 1 and 5)
  - Duration
  - Season (Summer, Fall, Winter o Spring)

The relation between these two tables is from many to many. It means that one country can have many tourist activities and many tourist activities can be in many countries. For instante, an activity call "Walking" can be added to Colombia, Canada, Australia and Germany, but at the same time Colombia could also has "Running".

#### __Backend__

Developed a server usingNode/Express. The server has the following routes:

- __GET /countries__:
  - It gets all the countries from the external API restcountries and save all the neccessary information in my own database
  - Get a list of the first ten countries
- __GET /countries/{idPais}__:
  - It gets the details of a particular country
  - It only get the details of the specific selected country
  - Includes all the tourist activities data for the specific selected country
- __GET /countries?name="..."__:
  - It gets the countries that match with the name passed by query (no need to be the exact name)
  - If there is no country that match it responds with an appropiate message.
- __POST /activity__:
  - It gets the data from the __controlled__ form in the route __/addactivity__ by body
  - Create a tourist activity in the database


#### __Testing__
- In the FronEntd, test that App function renders some components
- In the BackEnd, test some functionalities of the routes /countries and route /activity
- In the DataBase, test at least one of the database models