import { NewsLetter } from '../../models';

export const createOne = async (req, res) => {
  try {
    const letter = await NewsLetter.create(req.body);
    res.status(200).json(letter);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
};