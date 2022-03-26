//javascript challenges 
//number 1 
function fizzbuzz(String_A , String_B){

    if(((String_A.length + String_B)%3===0) &&    ((String_A.length + String_B)%5 ===0) ){
       return'fizzbuzz';
    
    }
 
    else if((String_A.length + String_B)%3===0)
    {
       return'fizz';
    }
 
    else if((String_A.length + String_B)%5===0)
 {
    return'buzz';
 }
    else{
       return'you didnt enter a string , please enter a string';
    }
 
 }
 
 let x  = fizzbuzz('hell','baguma');
 console.log(x);
 
 
 
 
 //number 2 
 
 const birth = prompt("Please input your Birth year")
 const now = new Date()
 const age = now.getYear() - birth + 1900;
 if(age<18)
     console.log(' sorry you are minor')
 else if(age>=18 && age<36)
     console.log(' you qualify to be called a youth')
 else console.log(' you are an elder society ')
 
   
 
 //number 3
 function Array([]){
 
    let i;
    for(i==0;i<Array.length;i++){
       if ( Array[i] % 2===0 )
 {
      console.log(i);
 
 }
    else if (Array[i] % 2 ===1){
      console.log(i);
 
    }
     else {
        console.log('char:'+ i);
     }
 
    }  
 
 }
 
 let x  = Array([1,3,2,5,7,"brian"]);
 console.log(x);
 
 
 
 
 
 //number 3
 
  const arr = ['class', 2, [7, 8, 9], {"name": "Michael"}, Symbol('foo'),
 true, false, 'name', 6];
 const classifyArray = arr => {
    return arr.reduce((acc, val) => {
       const previousData = acc.get(typeof val);
       if(previousData){
          acc.set(typeof val, [...previousData, val]);
       }else{
          acc.set(typeof val, [val]);
       };
       return acc;
    }, new Map());
 };
 console.log(classifyArray(arr));