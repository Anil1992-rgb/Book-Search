import React, { useState, useEffect } from "react";
// import Book from "../components/Book";
import API from "../utils/API";
// import Form from "../components/Form";

function Save() {

    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        getSavedBooks();
    }, [])


    const getSavedBooks = () => {
        API.getSavedBooks()
            .then(res =>
                setSavedBooks(
                    res.data
                )
            )
            .catch(err => console.log(err));
    }

    const handleBookDelete = id => {
        API.deleteBook(id).then(res => getSavedBooks());
    };

    return (
        <div>
            {savedBooks.map(savedBook => {
                return (
                    <div>
                        <p key={savedBook._id}>{savedBook.title}</p>
                        <button
                            onClick={() => handleBookDelete(savedBook._id)}
                            className="btn btn-danger ml-2"
                        >
                            Delete
                        </button>

                    </div>
                )

            })}
        </div>
    )
}

export default Save;
