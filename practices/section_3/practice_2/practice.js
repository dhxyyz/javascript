function create_updated_collection(collection_a, object_b) {
  //在这里写入代码

  for (i=0;i<collection_a.length;i++){
    for(x=0;x<object_b.value.length;x++){
      if (collection_a[i].key==object_b.value[x]){
        collection_a[i].count=collection_a[i].count-(collection_a[i].count-collection_a[i].count%3)/3;
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
