import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 1GUM8mugGgXfIoE0KO_nXiHP3yMr4YWRLcobMUpY8getnwIdZk6Y4NyyTLSt-yK39L5l9fzOFBQLAPfc9n4DSYS2q2tYYgbjqn4lVTDCQIA_QBpffXw-n7E2PQ7tX3Yx",
  },
});
