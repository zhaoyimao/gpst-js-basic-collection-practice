'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  return collectionA.map(value=>{
    return value.key
  }).filter(value_a=>{
    return objectB.value.includes(value_a)
  });
}
