import React, { useState } from "react";
import Book from "../components/Book";
import API from "../utils/API";
import Form from "../components/Form";

function Home() {

    const [books, setBooks] = useState([]);

    const [query, setQuery] = useState({});

    const handleInputChange = event => {
        const { name, value } = event.target;
        setQuery({ ...query, [name]: value })
        console.log(query);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        getBooks();
    };

    const getBooks = () => {
        API.getBooks(query.q)
            .then(res => {
                setBooks(res.data)
                console.log(books)
            }
            )
            .catch(() =>
                setBooks([])
            );
    };

    const handleBookSave = id => {
        const book = books.find(book => book.id === id);

        API.saveBook({
            googleId: book.id,
            title: book.volumeInfo.title,
            subtitle: book.volumeInfo.subtitle,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description
            
        }).then(() => getBooks());
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="jumbotron">
                        <h1 className="text-center">
                            <strong>Google Book Search</strong>
                        </h1>
                        <h2 className="text-center">Search and Save Books!</h2>
                    </div>
                </div>
                <div className="col-md-12">
                        <Form handleInputChange={handleInputChange}
                            handleFormSubmit={handleFormSubmit}
                            query={query} />
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-12">
                    <div className="card" title="Results" style={{padding: 20, border: "none"}}>
                        {books.map(book => {

                            return <Book
                                key={book.id}
                                id={book.id}
                                title={book.volumeInfo.title}
                                subtitle={book.volumeInfo.subtitle}
                                image={book.volumeInfo.imageLinks.thumbnail} handleBookSave={handleBookSave}
                                link={book.volumeInfo.infoLink}
                                authors={book.volumeInfo.authors.join(", ")}
                                description={book.volumeInfo.description}
                                 />
                        })}

                    </div>
                    
                </div>
                <br/>
            </div>
            

        </div>

    )
}

export default Home;