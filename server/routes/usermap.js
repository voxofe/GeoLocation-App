const express = require("express");
const router = express.Router();
const { entries } = require("../models");
const { validateToken } = require('../middleware/auth')



// router.get("/byId/:id", async(req, res)=>{
//   const entryId = req.params.id;
//   const entrym = await entries.findByPk(id);
//   res.json(entrym);
// })

// router.get("/byuserId/:id", async (req, res)=>{
//   const id = req.params.id;
//   const numberOfEntries = await entries.findall({
//     where: {userId: id}
//   });
//   res.json(lastEntry);
//   res.json(numberOfEntries.size());
// })

// router.post("/", validateToken, async (req,res)=>{
//   const entrym = req.body;
//   entrym.username = req.user.username;
//   entrym.userId = req.user.id;
//   await entries.create(entrym);
//   res.json(entrym);
    
//   })

router.get("/byuserId/:id", async (req, res)=>{
  const id = req.params.id;
  const userEntries = await entries.findAll({
    where: {userId: id}
  });
  res.json(userEntries);
})
    
module.exports = router;