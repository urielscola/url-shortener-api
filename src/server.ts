import app from './app';

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server starting at port ${process.env.PORT || 3001}`);
});
