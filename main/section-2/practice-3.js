'use strict';

module.exports = function countSameElements(collection) {
  return Println(getCount(collection));
}

function getCount(collection){
  var teg=/\d+/g;
  let result=collection.reduce((total,value)=>{
    let num=value.match(teg);
    if(num){
      let arr=value.split(/[-:[]/)
      if(total[arr[0]]){
        total[arr[0]]=Number(total[arr[0]])+Number(num);
      }else{
        total[arr[0]]=Number(num);
      }
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
    object.name=i;
    object.summary=collection[i];
    result.push(object);
  }
  return result;
}
