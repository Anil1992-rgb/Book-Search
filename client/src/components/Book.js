import React from "react";

function Book({ title, subtitle, authors, link, description, image, id, handleBookSave, Button }) {
    return (
        <div>
            <div className="card" style={{ padding: 20, backgroundColor: "#f8f8ff" }}>
                <div className="row">
                    <div className="col-md-4">
                        <h3 className="font-italic">{title}</h3>
                        <img className="img-thumbnail img-fluid" src={image} alt="Poster" />
                        {subtitle && <h6 className="font-italic">{subtitle}</h6>}
                        <br />
                        <h5><i>Authors: {authors}</i></h5>
                        <br />


                    </div>
                    <div className="col-md-8">
                        <div className="btn-container" style={{ float: "right" }}>
                            <a className="btn btn-secondary" target="_blank" rel="noopener noreferrer" href={link}>View</a>
                            <button
                                onClick={() => handleBookSave(id)}
                                className="btn btn-primary ml-2"
                            >Save</button>
                        </div>
                        <br />
                        <br />
                        <h5 style={{ padding: 10 }}>{description}</h5>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}

export default Book;