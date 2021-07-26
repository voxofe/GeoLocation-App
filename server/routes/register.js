const express = require("express");
const router = express.Router();
const { users } = require("../models");
const bcrypt = require('bcryptjs');

router.get("/", async (req, res) => {
    res.send("This is the register endpoint")
});

router.post("/", async (req,res)=>{

  const hash= bcrypt.hashSync(req.body.password, 10);
  const unavailableEmailMessage = "This email already exists! Try another one"

  try{
    const emailAlreadyExists = await users.findOne(({ where: { email: req.body.email } }))
 
    if(!emailAlreadyExists){
      let user = await users.create(
        Object.assign(req.body,{password:hash})
      );
      let data = await user.authorize();
      res.json(data);
    }else{
      res.json({message:unavailableEmailMessage})
    }
  }catch(err){
    return res.status(400).send(err);
  }
});

module.exports = router;