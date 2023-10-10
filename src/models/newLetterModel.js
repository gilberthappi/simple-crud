/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import mongoose from 'mongoose';

const newsLetterSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  location: String,
});

export const NewsLetter = mongoose.model('NewsLetter', newsLetterSchema);