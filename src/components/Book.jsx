/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, onDelete }) {
  return (
    <div>
      <h2>{book.title}</h2>
      <p>
        Author:
        {' '}
        {book.author}
      </p>
      {/* Other book details */}
      <button onClick={() => onDelete(book.id)}>Delete</button>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    // Add other prop types for book details
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
