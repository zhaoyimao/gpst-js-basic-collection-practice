'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  // let result=[];
  // collectionA.filter(value1=>{
  //   collectionB.toString().split(",").filter(value2=>{
  //     if(value1==value2){
  //       return result.push(value1);
  //     }
  //   });
  // });
  // return result;
  return collectionA.filter(value=>{return collectionB.toString().split(",").includes(value)});
}
