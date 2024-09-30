import React from 'react';

function BookCard(props) {
    return (
        <div className="bg-light border p-4 m-2">
        <h5>Title: {props.book.title}</h5>
        <p>Author: {props.book.author}</p>
        <p>Rating: {props.book.rating}</p>
        </div>
    )
}

export default BookCard;