const express = require("express");
const router = express.Router();
const { entries } = require("../models");
const {Op} = require('sequelize')

router.get("/", async(req,res)=>{
  
  let alreadyCheckedObjArray = [];
  let waitData = await entries.findAll({attributes: ['content_type', 'wait','createdAt','isp','method'],
  where:{
    wait:{[Op.not]:""}
  }
  });

  const alreadyChecked = (queryEntry)=>{
    let checkBool = false;
    for(let i=0; i<alreadyCheckedObjArray.length; i++){
      if(queryEntry.content_type === alreadyCheckedObjArray[i].content_type){
        if(queryEntry.wait === alreadyCheckedObjArray[i].wait){
          if(queryEntry.createdAT=== alreadyCheckedObjArray[i].createdAt){
            if(queryEntry.isp===alreadyCheckedObjArray[i].isp){
              if(queryEntry.method===alreadyCheckedObjArray[i].method){
                checkBool = true;
                alreadyCheckedObjArray[i].count++

              }
            }
          }
        }
      }
    }
    return checkBool;
  }
   
  const waitDataComplete=()=>{
    return waitData.map((entry)=>{
      if(alreadyChecked(entry)){
        //enty.count++
      }else{
        let alreadyCheckedObj={
          content_type: "",
          wait:"",
          createdAt:"",
          isp:"",
          method:"",
          count:1
        };
        alreadyCheckedObj.content_type = entry.content_type;
        alreadyCheckedObj.wait = entry.wait;
        alreadyCheckedObj.createdAt = entry.createdAt;
        alreadyCheckedObj.isp = entry.isp;
        alreadyCheckedObj.method = entry.method;
        alreadyCheckedObjArray.push(alreadyCheckedObj);
      }
    })
  }
  
  waitDataComplete()
  res.json(alreadyCheckedObjArray)
})

module.exports = router;