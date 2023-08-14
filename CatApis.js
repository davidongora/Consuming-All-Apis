const axios = require('axios');
const express= require('express');
const app = express;

const getCatFacts = async(req, res) => {
    const url = 'https://cat-fact.herokuapp.com/facts' ; 
    axios.get(url)
        .then(response => {
            if(response.status === 200) {
                const data = response.data;
                res.send(data);
            } else {
                res.status(response.status).send('failed to fetch data');
            }
        })
    .catch(err => {
        console .err('error fetching data', err);
        res.status(500).send('server error');
    });
app.get('/textlist', (req, res) => {
    const url = 'https://cat-fact.herokuapp.com/facts';
  
    axios.get(url)
      .then(response => {
        if (response.status === 200) {
          const data = response.data;
          const textList = data.map(fact => fact.text);
          res.send(textList);
        } else {
          res.status(response.status).send('Failed to fetch data');
        }
      });
    });
}

module.exports =
    getCatFacts;
