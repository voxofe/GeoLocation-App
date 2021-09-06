const express = require("express");
const router = express.Router();
const { entries } = require("../models");

router.get("/", async(req,res)=>{
  
  
  let waitData = await entries.findAll({attributes: ['content_type', 'wait','createdAt','isp','method']});
  
  res.json(waitData)
})

module.exports = router;