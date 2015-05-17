function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var collection=[];
  for (i=0;i<collection_a.length;i++){
    for (x=0;x<collection_b.length;x++){
      if(collection_a[i]==collection_b[x]){

        collection.push(collection_a[i]);
      }
    }
  }
  return collection;
}

module.exports = collect_same_elements;
