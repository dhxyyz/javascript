function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var collection=[];
  for (i=0;i<collection_a.length;i++){
    for (j=0;j<collection_b.value.length;j++){
      if(collection_a[i].key==collection_b.value[j]){

        collection.push(collection_a[i].key);
      }
    }
  }
  return collection;
}

module.exports = collect_same_elements;
