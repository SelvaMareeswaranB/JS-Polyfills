Array.prototype.polyfillMap=function (cb){
  let temp=[]
  for(let i=0;i < this.length;i++){
    temp.push(cb(this[i],i,this))
  }
  return temp
}

const arr = [12,3,2].polyfillMap((map)=>( map*2))
console.log("swm",arr)