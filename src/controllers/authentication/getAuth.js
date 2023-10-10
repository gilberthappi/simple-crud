/* eslint-disable import/prefer-default-export */
export const getAuth = (req, res) => {
  res.status(200).json({
    message: 'Auth is working',
  });
};