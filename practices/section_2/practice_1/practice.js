function count_same_elements(collection) {
  //在这里写入代码

  var target={};
   var array=[];
   var test=true;
   for (i=0;i<collection.length;i++){
     if(test){
       target={key:collection[i],count:0};
       test=false;
     }
     target.count=target.count+1;
     if(collection[i]!=collection[i+1]){
       array.push(target);
       test=true;
     }
   }
   return array;
 }
module.exports = count_same_elements;
