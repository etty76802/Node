import axios from 'axios';
import express from 'express';

const app = express();
const port = 5000;

const options = {
  method: 'GET',
  url: 'https://api.render.com/v1/services?includePreviews=true&limit=20',
  headers: {
    accept: 'application/json',
    authorization: 'Bearer rnd_ePuyRmKY9hjQU3s1KZPiR1SmUiix'
  }
};

axios
  .request(options)
  .then(res => console.log(res.data))
  .catch(err => console.error(err));
  
  app.get('/', (req, res) => {
    axios
      .request(options)
      .then(response => {
        res.json(response.data); 
      })
      .catch(error => {
        res.status(500).json({ error: 'Error fetching data from Render API' });
      });
  });
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });