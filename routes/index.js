const router = require("express").Router();
const movieController = require("../controllers/movieController");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "A sample API",
      version: "1.0.0",
    },
  },
  servers: [
    {
      url: "http:localhost:5000",
    },
  ],
  apis: ["./routes/*.js"],
};
const specs = swaggerJsdoc(options);
router.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

/**
  @swagger
  tags:
    name: Movies
    description: The Movie API
 */

/**
 *  @swagger
 *  paths:
 *    /:
 *      get:
 *        tags: [Movies]
 *        description: Return all fields in movies
 *        summary: get all movie fields
 *        produces:
 *          - application/json
 *        parameters: []
 *        responses:
 *          200:
 *            description: Returns all movie in collection.
 */

router.get("/", movieController.find);

/**
 *  @swagger
 *  paths:
 *    /totalMovie:
 *      get:
 *        tags: [Movies]
 *        description: Return all totalMovie in each countries
 *        summary: get count movie in each countries limit by 10 sort desc
 *        produces:
 *          - application/json
 *        parameters: []
 *        responses:
 *          200:
 *            description: Returns all movie count per countries in collection.
 */

router.get("/totalMovie", movieController.totalMovie);

/**
 *  @swagger
 *  paths:
 *    /movieGt2014:
 *      get:
 *        tags: [Movies]
 *        description: Return all match release date movie within 2014-2016
 *        summary: get match movie release date in each countries limit by 100
 *        produces:
 *          - application/json
 *        parameters: []
 *        responses:
 *          200:
 *            description: Returns all movie within 2014-2016 release date in collection.
 */

router.get("/movieGt2014", movieController.movieGt2014);

/**
 *  @swagger
 *  paths:
 *    /projectFormatDate:
 *      get:
 *        tags: [Movies]
 *        description: Return all movie match release date not null format released date
 *        summary: get match movie release date not null limit by 100 sort desc
 *        produces:
 *          - application/json
 *        parameters: []
 *        responses:
 *          200:
 *            description: Returns all movie with release date not null in collection.
 */

router.get("/projectFormatDate", movieController.projectFormatDate);
module.exports = router;
