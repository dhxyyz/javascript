function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var array=[];
  var test = false;

  for (var i=0;i<collection_a.length;i++){
    for (var j=0;j<array.length;j++){
      if (array[j].key == collection_a[i]){
        array[j].count ++;
        test=true;
      }
    }
    if (!test){
      var target={};
      target.key=collection_a[i];
      target.count=1;
      array.push(target);
    }
    test=false;
  }
  // return array;


 for (var k=0;k<array.length;k++){
     for(x=0;x<object_b.value.length;x++){
       if (object_b.value[x]==array[k].key){
         array[k].count=array[k].count-parseInt(array[k].count/3);
       }
     }
   }
   return array;
 }


module.exports = create_updated_collection;
