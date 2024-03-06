# welcome to flights service

## project setup 
 - clone the project on your local
 - executev` npm install` on the same as of your root directory of the downloaded project
 - create a `.env` file in the root directory and add the following environment variable 
 -`PORT = 3000`
 - inside the `src/config ` folder create a new file ` config.json ` and then add the following piece of json

 ```
{
  "development": {
    "username": " your db login name ",
    "password": "your db password ",
    "database": "Flight_Search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
 ```
 - once you've added your db config as listed above,go to the src folder from your terminal and execute `npx sequelize db:create`
 ```

## DB Design 
 - Airplane Table 
 - Flight 
 - Airport
 - City

 -A flight belongs to  an airplane can be used in multiple flights 
 - a city has many  airports but one airport belongs to a city 
 - one airport can have many flights, but a flight belongs  to one airport 