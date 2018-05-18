'use strict';

module.exports = function countSameElements(collection) {
  return println(getCount(collection));
}

function getCount(collection){
  let result=collection.reduce((total,value)=>{
    let object_array=value.split("-");
    if(object_array.length>1){
      total[object_array[0]]=Number(object_array[1]);
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
function println(collection){
  let result=[];
  for(let i in collection){
    let object={};
    object.key=i;
    object.count=collection[i];
    result.push(object);
  }
  return result;
}
