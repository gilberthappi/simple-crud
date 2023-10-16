import { NewsLetter } from '../../models';

export const findAll = async (req, res) => {
  try {
    const data = await NewsLetter.findMany({ title: req.params.title });
    if (!data) {
      return res.status(404).json({ message: 'not found' });
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};