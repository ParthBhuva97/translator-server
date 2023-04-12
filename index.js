const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const fetch = require('node-fetch');
const axios = require('axios');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/",(req,res)=>{
  res.send("Make POST Request to the Server");
})

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

app.post("/tts", async (req, res) => {
  const data = req.body;
  // console.log(data);
  const options = {
    method: 'POST',
    url: 'http://parthbhuva20.pythonanywhere.com/tts',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
    responseType: 'arraybuffer', // set response type to arraybuffer
  };
  const response = await axios(options);
  const fileData = response.data;
  res.set({ // set headers for the response
    'Content-Disposition': 'attachment; filename=audio.mp3',
    'Content-Type': 'audio/mpeg',
  });
  res.type('audio/mpeg');
  res.send(fileData); // send the file data
});

app.listen(5000);
