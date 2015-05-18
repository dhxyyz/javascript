function count_same_elements(collection) {
  //在这里写入代码
  var array=[];
  var test = false;

  for (var i=0;i<collection.length;i++){
    for (var j=0;j<array.length;j++){
      if (array[j].key == collection[i]){
        array[j].count ++;
        test=true;
      }
    }
    if (!test){
      var target={};
      target.key=collection[i];
      target.count=1;
      array.push(target);
    }
    test=false;
  }

   return array;
 }
module.exports = count_same_elements;
