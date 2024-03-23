const Youtube = require('youtube-stream-url');


const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;


// Enable CORS for all routes
app.use(cors());

// Define your routes and middleware here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.get('/getVideoURL', async (req, res) => {
    const { videoURL } = req.query;
    await Youtube.getInfo({url: videoURL}).then(video => console.log(video));
    console.log('sss');
});