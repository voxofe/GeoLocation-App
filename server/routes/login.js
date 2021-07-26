const express = require("express");
const router = express.Router();
const { users } = require("../models");
const db = require('../index')

const bcrypt = require('bcryptjs');
const saltRounds = 10;

router.get("/", async (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

// router.post("/", async (req, res) => {
   
//     // const login = req.body;  
//     // const user = await users.findOne({ where: { username: login.username } });
//     // const hash= bcrypt.hashSync(login.password, saltRounds);

//     // if (user === null) {
//     //     res.send("User doesn't exist");
//     // } else {
//     //     bcrypt.compare(hash, user.password, (error, response) => {
//     //         if (response) {
//     //             req.session.user = result;
//     //             console.log(req.session.user);
//     //             //res.send(result);
//     //             res.send({message: "Login done!"})
//     //         } else {
//     //             res.send({ message: "Wrong username/password combination!" });
//     //         }
//     //     });
//     // }

    router.post("/", async (req, res) => {
      // const { error } = validate(req.body);
      // if (error) return res.status(400).send(error.details[0].message);
     
      let user = await users.findOne({ where: { username: req.body.username } });
      if(user === null) {
        res.send(`Didn't find a user with username ${req.body.username}`)
      }else{
        res.send(`Found a user with username ${req.body.username}`)
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        console.log(validPassword)
        if(validPassword){
          req.session.user = user;
          console.log(req.session.user);
          res.send(user);
        }else{
          res.send("Incorrect password!")
        }
      }
      
    });
    //   if (!user) return res.status(400).send({status:400, message: "Invalid Username or Password"});
     
    //   const validPassword = await bcrypt.compare(req.body.password, user.password);
    //   if (!validPassword) return res.status(400).send({status:400, message: "Invalid Username or Password"});
     
    //   const token = user.generateAuthToken();
    //   res.status(200).send({status:200, data: token, message: "User Loggedin Succesfully"});
    //  });

    //     db.query(
    //     "SELECT * FROM users WHERE username = ?;",
    //     username,
    //     (err, result) => {
    //         if (err) {
    //             res.send({ err: err });
    //         }
    //         if (result.length > 0) {
    //             bcrypt.compare(password, result[0].password, (error, response) => {
    //                 if (response) {
    //                     req.session.user = result;
    //                     console.log(req.session.user);
    //                     res.send(result);
    //                 } else {
    //                     res.send({ message: "Wrong username/password combination!" });
    //                 }
    //             });
    //         } else {
    //             res.send({ message: "User doesn't exist" });
    //         }
    //     }
    // );

module.exports = router;