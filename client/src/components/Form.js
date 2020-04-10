import React from "react";

function Form({ query, handleInputChange, handleFormSubmit }) {
  return (
    <form style={{textAlign: "center"}}>      
          <input
            className="form-control col-11"
            style={{display: "inline-block", width: "80%", paddingTop: 0}}
            id="Title"
            type="text"
            value={query.q}
            placeholder="Harry Potter"
            name="q"
            onChange={handleInputChange}
            required
          />
          <button
            onClick={handleFormSubmit}
            style={{marginLeft: 5}}
            type="submit"
            className="btn btn-danger"
          >
            Search
        </button>
    </form>
  );
}

export default Form;
