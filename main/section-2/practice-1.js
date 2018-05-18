'use strict';

module.exports =function countSameElements(collection) {
  return getPrint(getCount(collection));
}

function getCount(collection){
  let count_array= collection.reduce((total,value)=>{
    if(total[value]){
      total[value]++;
    }else{
      total[value]=1;
    }
    return total;
  },[]);
  return count_array;
}
function getPrint(collection){
  let result=[];
  for(let i in collection){
    let object={};
    object.key=i;
    object.count=collection[i];
    result.push(object);
  }
  return result;
}