import axios from "axios";

export default {
  // Gets books from the Google API
  getBooks: function(q) {
    return axios.get("/api/google", { params: { q } });
  },

  saveBook: function(book) {
    return axios.post("/api/google", book )
  },

  getSavedBooks: function() {
    return axios.get("/api/mybooks")
  },

  deleteBook: function(id) {
    return axios.delete("/api/mybooks", { params: { id } })
  }
 
};
