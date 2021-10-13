const { ObjectId } = require("bson");
const { getDatabase } = require("../config/config");

class Movie {
  static async find() {
    try {
      const findResult = await getDatabase()
        .collection("movies")
        .find()
        .limit(5)
        .toArray();
      return findResult;
    } catch (error) {
      console.log(error);
    }
  }

  //*Total Movie in country
  static async totalMovie() {
    try {
      const findResult = await getDatabase()
        .collection("movies")
        .aggregate([
          {
            $group: {
              _id: {
                countries: "$countries",
              },
              totalMovieInCountry: { $sum: 1 },
            },
          },
          { $sort: { totalMovieInCountry: -1 } },
          { $limit: 10 },
        ])
        .toArray();

      return findResult;
    } catch (error) {
      console.log(error);
    }
  }

  // Match Unset Project
  static async movieGt2014() {
    try {
      const findResult = await getDatabase()
        .collection("movies")
        .aggregate([
          {
            $match: {
              released: {
                $gte: new Date("2014-11-07T00:00:00Z"),
                $lt: new Date("2016-11-07T00:00:00Z"),
              },
            },
          },
          {
            $unset: [
              "runtime",
              "lastupdated",
              "tomatoes",
              "fullplot",
              "directors",
              "cast",
              "type",
              "num_mflix_comments",
            ],
          },
          { $limit: 100 },
        ])
        .toArray();

      return findResult;
    } catch (error) {
      console.log(error);
    }
  }

  // project format date
  static async projectFormatDate() {
    try {
      const findResult = await getDatabase()
        .collection("movies")
        .aggregate([
          { $match: { released: { $exists: true } } },
          {
            $project: {
              title: 1,
              countries: 1,
              released: 1,
              "Released Movie Date": {
                $dateToString: { format: "%Y-%m-%d", date: "$released" },
              },
            },
          },
          { $sort: { "_id.country": -1 } },

          { $limit: 100 },
        ])
        .toArray();

      return findResult;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Movie;
