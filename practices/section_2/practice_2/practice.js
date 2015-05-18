function count_same_elements(collection) {
  //在这里写入代码
  var array=[];
  var test = false;
  for (var i=0;i<collection.length;i++){

    var key = collection[i].length>2?collection[i].substring(0,1):collection[i];
    var count = collection[i].length>2?parseInt(collection[i].substring(2)):1;

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
   return array;


}
module.exports = count_same_elements;
