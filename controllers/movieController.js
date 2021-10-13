const Movie = require("../models/Movie");

class movieController {
  static async find(req, res, next) {
    await Movie.find()
      .then((data) => res.status(200).json(data))
      .catch((err) => console.log(err));
  }

  static async totalMovie(req, res, next) {
    await Movie.totalMovie()
      .then((data) => res.status(200).json(data))
      .catch((err) => console.log(err));
  }

  static async movieGt2014(req, res, next) {
    await Movie.movieGt2014()
      .then((data) => res.status(200).json(data))
      .catch((err) => console.log(err));
  }

  static async projectFormatDate(req, res, next) {
    await Movie.projectFormatDate()
      .then((data) => res.status(200).json(data))
      .catch((err) => console.log(err));
  }
}

module.exports = movieController;
