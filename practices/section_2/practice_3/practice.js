function count_same_elements(collection) {
  //在这里写入代码
  var target={};
  var array=[];
var test=true;
for (i=0;i<collection.length;i++){
  if(i+1<collection.length){
    num_b=collection[i+1].charAt(0);
  }
  num_a=collection[i].charAt(0);
  if(test){
    target={name:collection[i].charAt(0),summary:0};

    test=false;
  }
  target.summary=target.summary+1;
  for(x=-3;x<0;x++){
    if(collection[i].indexOf(x)>-1){
      target.summary=target.summary+Math.abs(x);
    }
  }
  for(z=0;z<11;z++){
    if(collection[i].indexOf(z)>-1){
      target.summary=target.summary+z-1;
    }
  }
  if(num_a!=num_b){
    array.push(target);
    test=true;
  }
  if(i+1==collection.length){
    array.push(target);
    test=true;
  }
}
return array;
}

module.exports = count_same_elements;
