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
