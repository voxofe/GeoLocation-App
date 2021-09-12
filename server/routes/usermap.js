const express = require("express");
const router = express.Router();
const { entries } = require("../models");

router.get("/byuserId/:id", async (req, res)=>{
  const id = req.params.id;
  const userEntries = await entries.findAll({
    where: {userId: id}
  });
  res.json(userEntries);
})

// router.get("/byUniqueIsp", async(req,res)=>{
//   let isps = [];
//   var uniqueIsps = [];
//   let totalIsp = await entries.findAll();
//   var loopsDone=0;
//   var allLoopsDone = false;
//   console.log("before 1st loop")
//   for(i=0; i<totalIsp.length; i++){
    
//     isps[i]= totalIsp[i].isp;
//     loopsDone++
//     if(loopsDone===totalIsp.length){
//       allLoopsDone = true;
//     }
//   }
//   if(allLoopsDone){
//     loopsDone=0;
//     allLoopsDone=false
//     console.log("before 2nd loop (1st done)")
//     for (j=0; j<isps.length;i++){
//       if(!alreadyIn({isp:isps[j],array: uniqueIsps})){
//         uniqueIsps.push(isps[i])
//       }
//       loopsDone++
//     }
//     if(loopsDone===isps.length){
//       allLoopsDone = true;
//     }
//   }
//   if(allLoopsDone){
//     // const UniqueIsp = Object.keys(helper);
//     // res.json({numberOfIsp: uniqueIsps.length});
//     console.log(uniqueIsps)
//   }

// })

function alreadyIn(obj){
  var found = false;
  for(i=0; i<obj.array.length; i++){
    if(obj.isp===obj.array[i]){
      found = true;
    }
  }
  return found;
}
module.exports = router;