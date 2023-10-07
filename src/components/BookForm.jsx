/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function BookForm({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      // Add other book details as needed
    };
    onAddBook(newBook);
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <h1>Add a Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        {/* Add other input fields for book details */}
        <div>
          <button type="submit">Add Book</button>
        </div>
      </form>
    </div>
  );
}

BookForm.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default BookForm;
