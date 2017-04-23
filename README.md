## Project Setup

### Prerequisites
- NodeJS
- MongoDB

### Node Global Packages
npm install -g swagger

### Project scripts
- runDb: Start the database
- initDb: Clears any data on the current database and populates the collection products from the file "wms_product_data.json"
- setupProject: Installs any dependency from the project
- server: starts the api server
- swagger: Starts the Swagger server on the url [localhost:10010/docs](http://localhost:10010/docs)

## Kicking up the project
1. Install **Node** and **MongoDB**
1. npm run -g swagger
1. npm run setupProject
1. npm run initDb
1. npm run runDb
1. npm run server
1. npm run swagger __*(Access this url [localhost:10010/docs](http://localhost:10010/docs) to see the avaliable API and also try it live)*__
