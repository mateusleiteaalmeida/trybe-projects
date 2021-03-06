db.movies.aggregate({
  $match: {
    $and: [
      {
        "imdb.rating": {
          $gte: 7,
        },
      },
      {
        $and: [
          {
            genres: {
              $ne: "Crime",
            },
          },
          {
            genres: {
              $ne: "Horror",
            },
          },
        ],
      },
      {
        $or: [
          {
            rated: "PG",
          },
          {
            rated: "G",
          },
        ],
      },
      {
        $and: [
          {
            languages: "English",
          },
          {
            languages: "Spanish",
          },
        ],
      },
    ],
  },
});
