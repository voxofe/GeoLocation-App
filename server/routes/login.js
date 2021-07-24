const express = require("express");
const router = express.Router();
const { users } = require("../models");
const db = require('../index')

const bcrypt = require("bcrypt");
const saltRounds = 10;

router.get("/", async (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

router.post("/", async (req, res) => {
   
    const login = req.body;  
    const user = await users.findOne({ where: { username: login.username } });
    if (user === null) {
        res.send("User doesn't exist");
    } else {
        bcrypt.compare(login.password, user.password, (error, response) => {
            if (response) {
                req.session.user = result;
                console.log(req.session.user);
                res.send(result);
            } else {
                res.send({ message: "Wrong username/password combination!" });
            }
        });
    }

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
});


module.exports = router;