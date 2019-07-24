export const globalErrorHandler = (err, req, res, next) => {
  res.status(500).send('opa');
};
