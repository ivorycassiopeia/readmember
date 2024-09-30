import React from 'react';
import BookCard from './BookCard';

const bookList = [
  {
    id: 0,
    title: "Harry Potter and the Sorcerer’s Stone",
    author: "J.K. Rowling",
    rating: null
  },
  {
    id: 1,
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    rating: null
  }
]

function App() {
  return (
    <div>
      <h1>Readmember</h1>
      { bookList.map( book => <BookCard book ={book} /> ) }
    </div>
  );
}

export default App;
