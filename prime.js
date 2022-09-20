function prime(num){
      let counter =0
      for(let i=1;i<=num;i++){
            if(num%i==0){
                  counter++;
           }
     }
    if(counter==2){
         return true;
   }else{
          return false;
  }
}
let answer=prime(13);
if(answer==true){
     console.log("peime");
}else{
    console.log("NA");
}