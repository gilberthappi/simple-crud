import { NewsLetter } from '../../models';

export const deleteAll = async (req, res) => {
  try {
    const data = await NewsLetter.deleteMany({ title: req.params.title });

    // Check if any documents were deleted
    if (data.deletedCount === 0) {
      return res.status(404).json({ message: 'No matching documents found for deletion' });
    }

    res.status(200).json({ message: 'Delete successful', deletedCount: data.deletedCount });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};
