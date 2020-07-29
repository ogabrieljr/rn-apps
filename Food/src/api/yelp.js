import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer _pLNTnM6Y1u-CuS3qc2pJCXvpLE1x2jAq43bq2lXliotvgORHcZDfavUqq0GiKvO5CPUESF6P1SAvOmRvF5TukXqxASEwOoUmPjCs8bqWJL3wJCD6vJbEltkQewMX3Yx",
  },
});
