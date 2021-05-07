// 1st Problem
// function mysteryScoping1() {
//     var x = 'out of block';
//     if (true) {
//       //var x = 'in block';  
//       console.log(x);
//     }
//     console.log(x);
// } // x should hae been declared outside initially
// mysteryScoping1();

//   function mysteryScoping2() {
//     const x = 'out of block';
//     if (true) {
//       const x = 'in block';  
//       console.log(x);
//     }
//     console.log(x);
//   } // this won't have an error 'cause the instances are different and let/const are block scoped

//   mysteryScoping2();

//   function mysteryScoping3() {
//     const x = 'out of block';
//     if (true) {
//       var x = 'in block';  
//       console.log(x);
//     }
//     console.log(x);
//   }; // x was already declared using const on the initial function declation

//   mysteryScoping3();
  
//   function mysteryScoping4() {
//     let x = 'out of block';
//     if (true) {
//       let x = 'in block';  
//       console.log(x);
//     }
//     console.log(x);
//   } // no error cause the let declaration have been declared between their own blocks

//   mysteryScoping4();
  
//   function mysteryScoping5() {
//     let x = 'out of block';
//     if (true) {
//       let x = 'in block';  
//       console.log(x);
//     }
//     let x = 'out of block again';
//     console.log(x);
//   } // error cause the let function for x from outside the black was redeclared

//   mysteryScoping5();


  