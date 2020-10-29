const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const config = require("./config")
const rp = require('request-promise');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

async function searchShow(query){
  let base = config.apis.tvmaze_base
  let url = base + config.apis.tvmaze_search + query
  let options = {
    uri: url,
    method: 'GET',
    json: true
  }
  let results = rp(options)
              .then(function (body) {
                  return body
              })
              .catch(function (err) {
                return ""
              })
  return results
}

app.post('/api/tv/search', async (req, res) => {
  let query = req.body.query
  let searchResults = await searchShow(query) 
  res.send({tv_search_results: searchResults});
})





app.listen(port, () => console.log(`Listening on port ${port}`));