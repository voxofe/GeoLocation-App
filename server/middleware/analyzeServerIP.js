var request = require('request')
var url = "http://ipwhois.app/json/"

var serverGeoLoc = (req,res,next)=>{

    let ipToGeoLoc = new Map()
    let loopsDone = 0;
    let allLoopsDone = false;

    for(let i=0; i<req.body.entries.length; i++){
        if(req.body.entries[i].serverIPAddress){
            let fullUrl = url.concat(req.body.entries[i].serverIPAddress);

            request({
                url: fullUrl,
                json: true
            }, function (error, response, body) {
            
                if (!error && response.statusCode === 200) {
                    ipToGeoLoc.set(body.ip, {
                        latitude: body.latitude,
                        longitude: body.longitude
                    })
                    loopsDone++;
                    if(loopsDone === req.body.entries.length) allLoopsDone = true;
                }
                if(allLoopsDone){
                    req.ipToGeoLoc = ipToGeoLoc;
                    next();
                }
            });
        }else{
            ipToGeoLoc.set("", {
                latitude: "",
                longitude: ""
            })
            loopsDone++;
            if(loopsDone === req.body.entries.length) allLoopsDone = true;

            if(allLoopsDone){
                req.ipToGeoLoc = ipToGeoLoc;
                next();
            }
        }
    }
    
}
module.exports = {serverGeoLoc}