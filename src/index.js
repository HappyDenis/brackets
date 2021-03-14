module.exports = function check(str, bracketsConfig) {

  let str1 = str;
  let str2='';
  while (str2 != str1) {
     str2 = str1;
    bracketsConfig.forEach(function(item,index){
    // console.log(item);
    // console.log(item[1]);
    for (let i=0; i<str1.length; i++) {
      if (str1[i] == item[1]) {           //тип string
    //  console.log('OK1: '+str1[i])
    //  console.log(str1);
           if (str1[i-1] == item[0]) {
           str1= str1.slice(0,i-1)+str1.slice(i+1);
           i=0;   // начинаем просмотр заново
           }  
      }
    } 
    })  // forEach
        // console.log(str1 +':str1'); 
        // console.log(str2 +':str2'); 
  }     // while (str2 != str1)
  return(!str1);
}