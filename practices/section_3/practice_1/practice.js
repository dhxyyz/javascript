function create_updated_collection(collection_a, object_b) {

  for (i=0;i<collection_a.length;i++){
    for(x=0;x<object_b.value.length;x++){
      if (collection_a[i].key==object_b.value[x]){
        collection_a[i].count=collection_a[i].count-1;
      }
    }
  }
  return collection_a;
}
module.exports = create_updated_collection;
