'use strict';

module.exports =function collectSameElements(collectionA, collectionB) {
  //  let result=[];
  //   collectionA.filter(value1=>{
  //     collectionB.filter(value2=>{
  //       if(value1==value2){
  //      return result.push(value1);
  //       }
  //  });
 //});
  return collectionA.filter(value=>{return collectionB.includes(value)});
}
// const collectionA = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd'];
// const collectionB = ['a', 'd', 'e', 'f'];
// const result1=collectSameElements(collectionA,collectionB);
// console.log(result1)