const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const fetch = require('node-fetch');
const axios = require('axios');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/translate',async (req,res)=>{
    const data = req.body;
    console.log(data);
    const options = {
        method: 'POST',
        url: 'http://parthbhuva97.pythonanywhere.com/translate',
        headers: {
          'Content-Type': 'application/json',
        },
        data: data
      };
    const response = await axios(options);
    // console.log(response);
    res.send(await response.data);
});

app.listen(5000);
