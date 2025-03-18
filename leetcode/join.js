
var join = function(arr1, arr2) {
    arr1.sort((a,b) => a.id - b.id);
   arr2.sort((a,b) => a.id - b.id);
     let n1 = arr1.length;
 let n2 = arr2.length;
 let l = 0;
 let r = 0;
 let result = [];
 while (l < n1 && r < n2) {
   if (arr1[l].id === arr2[r].id) {
     console.log("match", l, r);
     result.push(Object.assign(arr1[l],arr2[r]));
     l++;
     r++;
   } else if (l < n1 && arr1[l].id < arr2[r].id) {
   
     result.push(arr1[l]);
     l++;
   } else if (r < n2 && arr2[r].id < arr1[1].id) {
     result.push(arr2[r]);
     r++;
   }
 }
 if (l !== n1) {
   while (l < n1) {
     result.push(arr1[l]);
     l++;
   }
 }
 if (r !== n2) {
   while (r < n2) {
     result.push(arr2[r]);
     r++;
   }
 }
 return result
};