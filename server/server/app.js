import express from 'express';
import path from 'path';

const app = express();
// tell the app to look for static files in these directories
app.use(express.static(path.join(__dirname, '../../server/static/')));
app.use(express.static(path.join(__dirname, '../../client/dist/')));

// start the server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000 or http://127.0.0.1:5000');
});
