function count_same_elements(collection) {
  //在这里写入代码

     var target={};
     var array=[];
     var test=true;
     for (i=0;i<collection.length;i++){
       if(test){
         target={key:collection[i].charAt(0),count:0};

         test=false;
       }
       target.count=target.count+1;
       for(y=0;y<10;y++){
         if(collection[i].indexOf(y)>-1){
           target.count=target.count+y-1;
         }
       }
       if(collection[i]!=collection[i+1]){
         array.push(target);
         test=true;
       }
     }
     return array;
   }


module.exports = count_same_elements;
