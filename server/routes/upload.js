const express = require("express");
const router = express.Router();
const {entries} = require("../models");
// const { validateToken } = require('../middleware/auth')
const request = require("request");
const whois = require('whois-json');

router.get("/fetchClientIP", async (req,res)=>{
  request({
      url: "https://geolocation-db.com/json",
      json: true
  }, function (error, response, body) { 
    if (!error && response.statusCode === 200) {
      res.json(body); 
    }
  });

});

router.post("/", async (req,res)=>{
  
  var results = await whois(req.body.userIP);
  var isp = results.descr
  console.log(results);
  for(let i=0; i<req.body.entries.length; i++){
    entries.create({
      startedDateTime: req.body.entries[i].startedDateTime,
      serverIPAddress: req.body.entries[i].serverIPAddress,
      wait: req.body.entries[i].wait,
      method:req.body.entries[i].method,
      url: req.body.entries[i].url,
      status: req.body.entries[i].status,
      statusText: req.body.entries[i].statusText,
      age: req.body.entries[i].age,
      expires: req.body.entries[i].expires,
      last_modified: req.body.entries[i].last_modified,
      content_type: req.body.entries[i].content_type,
      cache_control: req.body.entries[i].cache_control,
      pragma: req.body.entries[i].pragma,
      host: req.body.entries[i].host,
      isp: isp,
      userId: req.body.userID
    }).then(()=>{
        console.log(`Entry ${i+1} created!`)
      });
  }
});

module.exports = router;