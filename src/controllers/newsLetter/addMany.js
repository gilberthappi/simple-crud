import { NewsLetter } from '../../models';

export const addMany = async (req, res) => {
  try {
    const data = await NewsLetter.insertMany(req.body);
    res.status(200).json({ message: 'Add successful', data });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};