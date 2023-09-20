// Given an expression string x. 
// Examine whether the pairs and the orders of“{“,”}”,”(“,”)”,”[“,”]” are correct in exp.
// For example, the function should return 'true' for exp= “[()]{}{()()}” and 'false' for exp = “[(])”.
// Example 1:Input:{([])}
// Output:true    Explanation:{ ( [ ] ) }. Same colored brackets can form balaced pairs, with 0 number of unbalanced bracket.
// Example 2:Input:()
// Output:true    Explanation:(). Same bracket can form balanced pairs, and here only 1 type of bracket is present and in balancedway.
// Example 3:Input:([]
// Output:false   Explanation:([]. Here square bracket is balanced but the small bracket is not balanced and Hence , the output will be unbalanced

function checkParentheses(){
   const map=new Map();
   map.set('{','}');
   map.set('(',')');
   map.set('[',']');
   const b=[];
   for(let i=0;i<str.length;i++){
      if(map.has(str.charAt(i))){
         b.push(str.charAt(i));
      } else{
         let pop=b.pop();
         if(map.get(pop)!==str.charAt(i)){
            return false;
         }
      };
   };
   return b.length===0;
};

const str = "([]){}";
console.log(checkParentheses(str));