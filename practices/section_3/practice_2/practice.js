function create_updated_collection(collection_a, object_b) {
  //在这里写入代码

  for (i=0;i<collection_a.length;i++){
    for(j=0;j<object_b.value.length;j++){
      if (collection_a[i].key==object_b.value[j]){
        collection_a[i].count=collection_a[i].count-(collection_a[i].count-collection_a[i].count%3)/3;
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
