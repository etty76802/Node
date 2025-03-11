import axios from 'axios';

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