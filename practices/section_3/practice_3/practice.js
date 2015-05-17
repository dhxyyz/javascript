function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var target={};
   var array=[];

   var test=true;
   for (i=0;i<collection_a.length;i++){
     if(test){
       target={key:collection_a[i],count:0};
       test=false;
     }
     target.count=target.count+1;
     if(collection_a[i]!=collection_a[i+1]){
       array.push(target);
       test=true;
     }
   }


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
