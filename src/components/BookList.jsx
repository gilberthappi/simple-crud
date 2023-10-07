/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function BookList({ books, onDelete }) {
  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Book book={book} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      author: PropTypes.string,
      // Add other prop types for book details
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
