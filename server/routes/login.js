const express = require("express");
const router = express.Router();
const { users } = require("../models");
const bcrypt = require('bcryptjs');
const {sign} = require('jsonwebtoken')
const { validateToken } = require('../middleware/auth')

router.get("/", validateToken, async (req, res) => {
  res.json({
     loggedIn: true,
     username: req.user.username,
     role: req.user.role 
  }); 
});

router.post("/", async (req, res) => {

  const {email, password} = req.body;

  const user = await users.findOne(({ where: { email: email } }));
  if(user === null) {
    res.json({message: `No user with email: ${email}`});
  }
  else{
    bcrypt.compare(password, user.password).then((match) => {
      if(!match){
        res.json({message: "Incorrect password!"});
      }else{
        const accessToken = sign({ username : user.username, id : user.id, role: user.role},"Gh5HQXhGBWs24fpAIRmAbn0TELM4");
        res.json({message: "Logged in!", token: accessToken});
      }
    });
  }
});

module.exports = router;











      // // const { error } = validate(req.body);
      // // if (error) return res.status(400).send(error.details[0].message);
     
      // let user = await users.findOne({ where: { username: req.body.username } });
      // if(user === null) {
      //   res.send(`Didn't find a user with username ${req.body.username}`)
      // }else{
      //   res.send(`Found a user with username ${req.body.username}`)
      //   const validPassword = await bcrypt.compare(req.body.password, user.password);
      //   console.log(validPassword)
      //   if(validPassword){
      //     // req.session.user = user;
      //     res.send("Correct password!")
      //     // res.send(user);
      //   }else{
      //     res.send("Incorrect password!")
      //   }
      // }
      
    // });
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
