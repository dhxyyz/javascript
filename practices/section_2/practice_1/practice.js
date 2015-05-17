function count_same_elements(collection) {
  //在这里写入代码
  var listMap={};
  for(i=0;i<collection.length;i++){
    if (!!listMap[collection[i]]) {
            listMap[collection[i]]++;
        } else {
            listMap[key] = 1;
        }
        return listMap;
  }
}

module.exports = count_same_elements;
