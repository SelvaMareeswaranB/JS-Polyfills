Array.prototype.polyfillFilter=function(cb){
   let temp=[]
   for(let i=0;i<this.length;i++){
   
    if(cb(this[i],i,this)){
        temp.push(this[i])
    }
   }
   return temp
}

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 },
    { name: "David", age: 35 }
  ];
  
  // Filter users who are 30 or older
  const adults = users.polyfillFilter(user => user.age >= 30);
  
  console.log(adults);