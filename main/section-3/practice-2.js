'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  return collectionA.filter(value_a=>{
    if(objectB.value.includes(value_a.key)){
      value_a.count=value_a.count-Math.floor(value_a.count/3);
      return value_a.count;
    }else{
      return value_a.count;
    }
  });
}
