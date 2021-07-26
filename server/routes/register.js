const express = require("express");
const router = express.Router();
const { users } = require("../models");
const bcrypt = require('bcryptjs');

router.post("/", async (req,res)=>{

  const hash= bcrypt.hashSync(req.body.password, 10);
  const unavailableEmailMessage = "Email already exists. Try another one.";
  const registerCompletedMessage = "Registration completed!";

  try{
    const emailAlreadyExists = await users.findOne(({ where: { email: req.body.email } }));
 
    if(!emailAlreadyExists){
      let user = await users.create(
        Object.assign(req.body,{password:hash})
      );
      res.json({message:registerCompletedMessage});
    }else{
      res.json({message:unavailableEmailMessage});
    }
  }catch(err){
    return res.status(400).send(err);
  }
});

module.exports = router;