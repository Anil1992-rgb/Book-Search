import React from "react";

function Book({ title, subtitle, authors, link, description, image, id, handleBookSave, Button }) {
    return (
        <div className="row">
            <div className="col-md-8">
                <h3 className="font-italic">{title}</h3>
                {subtitle && <h5 className="font-italic">{subtitle}</h5>}
                <h3>{authors}</h3>
                <h4>{description}</h4>
                <img src={image} alt="Poster"/>

            </div>
            <div className="col-md-4">
                <div className="btn-container">
                    <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>View</a>
                </div>
                <button
                    onClick={() => handleBookSave(id)}
                    className="btn btn-primary ml-2"
                ></button>
            </div>
        </div>
    )
}

export default Book;