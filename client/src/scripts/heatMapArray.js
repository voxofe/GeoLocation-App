import HeatmapLayer from "react-leaflet-heatmap-layer";

function arrayfy(heatMapData){
    var heatArray = [];
    // var ipAddressHeat = [];

    // console.log("inside arrayfy")
    // console.log(heatMapData[0]);

    for(var i=0; i<heatMapData.length; i++){
   
        console.log(heatMapData[i].serverIPAddress)
        if(heatMapData[i].serverIPAddress !== ""){
            const existData = alreadyExists({
                lat:heatMapData[i].serverLatitude,
                long: heatMapData[i].serverLongitude, 
                array:heatArray})
            if(existData.exists){
               heatArray[existData.index][2]= heatArray[existData.index][2]+1;
            }else{ 
                var nestedArray = [heatMapData[i].serverLatitude,heatMapData[i].serverLongitude,1]
                heatArray.push(nestedArray)
            }
        }    
    }
    return heatArray;
}

function alreadyExists(obj){
    // const index = obj.array.findIndex(element => element.serverIPAddress===obj.ip)
    var found = false;
    for(var i=0; i<obj.array.length; i++){
        if(obj.array[i][0]===obj.lat && obj.array[i][1]===obj.long){
            found = true;
            return {exists: true, index: i};    
        }
    }
    if(!found){
        return {exists: false}
    }

    
}
    //     var eachEntryObj = {
    //         "startedDateTime":undefined,
    //         "serverIPAddress":undefined,
    //         "wait":undefined,
    //         "method":undefined,
    //         "url":undefined,
    //         "status":undefined,
    //         "statusText":undefined,
    //         "age":undefined,
    //         "expires":undefined,
    //         "last_modified":undefined,
    //         "content_type":undefined,
    //         "cache_control":undefined,
    //         "pragma":undefined,
    //         "host":undefined
    //     }
    //     eachEntryObj.startedDateTime = oldObj.log.entries[i].startedDateTime;
    //     eachEntryObj.serverIPAddress = oldObj.log.entries[i].serverIPAddress;
    //     eachEntryObj.wait = oldObj.log.entries[i].timings.wait;
    //     eachEntryObj.method = oldObj.log.entries[i].request.method;
    //     eachEntryObj.url = onlyDomain(oldObj.log.entries[i].request.url);
    //     eachEntryObj.status = oldObj.log.entries[i].response.status;
    //     eachEntryObj.statusText = oldObj.log.entries[i].response.statusText; 
    //     eachEntryObj.age = returnValueOf("age",i,oldObj);
    //     eachEntryObj.expires = returnValueOf("expires",i,oldObj);
    //     eachEntryObj.last_modified = returnValueOf("last-modified",i,oldObj);
    //     eachEntryObj.content_type = returnValueOf("content-type",i,oldObj);
    //     eachEntryObj.cache_control = returnValueOf("cache-control",i,oldObj);
    //     eachEntryObj.pragma = returnValueOf("pragma",i,oldObj);
    //     eachEntryObj.host = returnValueOf("host",i,oldObj);

    //     filteredHarObj.entries.push(eachEntryObj);
    // }
    

//This is used to find value of certain name inside response.headers array f.e {"name":"age","value":"19224"}
// function returnValueOf(searchForThisName,indexOfEntry,oldObj){
//     var headersArray = oldObj.log.entries[indexOfEntry].response.headers;
//     var indexOfFoundValue;
//     var thisNameExists = false;
//     for(var j=0; j < headersArray.length; j++){
//         if(headersArray[j].name === searchForThisName){
//             indexOfFoundValue = j;
//             thisNameExists = true;
//         }
//     }
//     if(thisNameExists){
//         return headersArray[indexOfFoundValue].value;
//     }else{
//         return null;
//     }
// }

// function onlyDomain(spaghettiURL){ 
//     var urlParts = spaghettiURL.replace('http://','').replace('https://','').split(/[/?#]/);
//     var domain = urlParts[0]; 
//     return domain;
// }


export default arrayfy