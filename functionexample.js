function palindrome(str){
   let left  = 0;
   let right = str.length - 1;
   while(left < right){
    if(str[left] !== str[right]){
        return false
    }
    return true
   }
   left++;
   right--
}
const str = "radar";
console.log(palindrome(str));