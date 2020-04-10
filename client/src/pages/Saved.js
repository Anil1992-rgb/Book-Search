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
        <div className="container">
            <br />
            <h1 style={{ textAlign: "center", backgroundColor: "lightGray", padding: 10 }}>Saved Books</h1>
            <hr />
            <br />
            {savedBooks.map(savedBook => {
                return (
                    <div className="container">
                        <div className="card" style={{ padding: 20, backgroundColor: "#f8f8ff" }}>
                            <div className="row">
                                <div className="col-md-4">
                                    <h3 className="font-italic">{savedBook.title}</h3>
                                    <img className="img-thumbnail img-fluid" src={savedBook.image} alt="Poster" />
                                    {savedBook.subtitle && <h6 className="font-italic">{savedBook.subtitle}</h6>}
                                    <br />
                                    <h5>Authors: <strong><i>{savedBook.authors}</i></strong></h5>
                                    <br />
                                </div>
                                <div className="col-md-8">
                                    <div className="btn-container" style={{ float: "right" }}>
                                        <a className="btn btn-secondary" target="_blank" rel="noopener noreferrer" href={savedBook.link}>View</a>
                                        <button
                                            onClick={() => handleBookDelete(savedBook._id)}
                                            className="btn btn-danger ml-2"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                    <br />
                                    <br />
                                    <h5 style={{ padding: 10 }}>{savedBook.description}</h5>
                                </div>
                            </div>
                        </div>
                        <br/>
                    </div>
                    
                )
            })}
        </div>
    )
}

export default Save;
