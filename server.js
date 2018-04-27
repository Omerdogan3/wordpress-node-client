const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const crawler = require('./crawler');
const wp_publisher = require('./wpPublisher');

app.get('/', (req, res) => {
  crawler().then((result)=>{
    res.send(result).then(
        wp_publisher(result)
    );
  });
});





app.listen(port, () => console.log(`Listening on port ${port}`));
