'use strict';

 module.exports = function createUpdatedCollection(collectionA, objectB) {
  return Println(getCount(collectionA)).filter(value=>{
    if(objectB.value.includes(value.key)){
      value.count=value.count-Math.floor(value.count/3);
      return value.count;
    }else{
      return value.count;
    }
  });
}
function getCount(collectionA){
  let result=collectionA.reduce((total,value)=>{
    let arr=value.split("-");
    if(arr.length>1){
      total[arr[0]]=Number(arr[1]);
    }else{
      if(total[value]){
        total[value]++;
      }else{
        total[value]=1;
      }
    }
    return total;
  },[]);
  return result;
}

function Println(collection){
  let result=[];
  for(let i in collection){
    let object={};
    object.key=i;
    object.count=collection[i];
    result.push(object);
  }
  return result;
}
