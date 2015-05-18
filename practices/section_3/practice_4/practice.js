function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var array=[];
  var test = false;
  for (var i=0;i<collection_a.length;i++){

    var key = collection_a[i].length>2?collection_a[i].substring(0,1):collection_a[i];
    var count = collection_a[i].length>2?parseInt(collection_a[i].substring(2)):1;

    for (var j=0;j<array.length;j++){
      if (array[j].key === key){
        array[j].count=array[j].count+count;
        test=true;
    //    break;
      }
    }
    if (!test){
      var target={};
      target.key=key;
      target.count=count;
      array.push(target);
      
    }
    test=false;
  }
//   return array;

  for (i=0;i<array.length;i++){
    for(x=0;x<object_b.value.length;x++){
      if (array[i].key==object_b.value[x]){
        array[i].count=array[i].count-parseInt(array[i].count/3);
      }
    }
  }
  return array;
}
module.exports = create_updated_collection;
