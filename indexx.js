// if 1-chi masala
// let n =  23;
// if (n>0){
//     n +=1;
// };

// if 2 chimasala
// let n =  23;
// if (n>0){
//     n +=1;
// }else {
//     n -= 2
// };

// //  if 3 chi masala
// let n =  23;
// if (n > 0){
//     n +=1;
// }else {
//     n -= 2
// }
// if (n == 0){
//     n = 10;
// }
// console.log(n);

// if 4 chi masala
// alert('Salom! Men kiritilgan sonlardan nechtasi musbat ekanligini aniqlab beraman')
// const a = prompt('Butun son kiriting: ');
// const b = prompt('2-butun sonni kiriting: '); const c = prompt('3-butun sonni kiriting: ');
// let positiveNumberCount = 0;

// if (a > 0) {
//      positiveNumberCount++;
//     }
// if (b > 0) {
//         positiveNumberCount++;
//     }
// if (c > 0) {
//         positiveNumberCount++;
//     }

// console.log(positiveNumberCount);

// if 5 chi masala 
// alert('Salom! Men kiritilgan sonlardan nechtasi musbat va nechtasi manfiy ekanligini aniqlab beraman')
// const a = prompt('Butun son kiriting: ');
// const b = prompt('2-butun sonni kiriting: ');
// const c = prompt('3-butun sonni kiriting: ');
// let positiveNumberCount = 0;
// let negativeNumberCount = 0;

// if (a > 0) {
//         positiveNumberCount++;
//     } else if (a < 0) {
//         negativeNumberCount++;
//     }
// if (b > 0) {
//         positiveNumberCount++;
//     } else if (b < 0) {
//         negativeNumberCount++;
//     }
// if (c > 0) {
//         positiveNumberCount++;
//     } else if (c < 0) {
//         negativeNumberCount++;
//     };
//     console.log(negativeNumberCount);

// if 6 chi masala
// alert('Salom! Men kiritilgan sonlardan qaysi biri katta ekanligini aniqlab beraman')
// const a = prompt('Butun son kiriting: ');
// const b = prompt('2-butun sonni kiriting: ');
// let max, order;
// if (a > b) {
//         max = a;
//         order = 1;
//  } else if (b > a) {
//         max = b;
//         order = 2;
//  };

//  if 7 chi masala
// alert('Salom! Men kiritilgan sonlardan kichigini tartib raqamini aniqlab beraman')
// const a = prompt('Butun son kiriting: ');
// const b = prompt('2-butun sonni kiriting: ');
// let min, order;
// if (a < b) {
//         min = a;
//         order = 1;
// } else if (b < a) {
//         min = b;
//         order = 2;
//  };

//  if 8 chi masala

// alert('Salom! Men kiritilgan sonlardan birinchi kichigini keyin kattasini chiqarib beraman')
// const a = prompt('Butun son kiriting: ');
// const b = prompt('2-butun sonni kiriting: ');
// let min, max;
// calculations();
// function calculations() {
//     if (a > b) {
//         max = a;
//         min = b;
//     } else if (a == b) {
//         document.getElementById('result').innerHTML = 'Ikkoviyam tengku, Brat :)';
//         return;
//     } else {
//         max = b;
//         min = a;
//     }
// } ;   

// if 9 chi masala

// let A = prompt('Butun son kiriting: ');
// let B = prompt('2-butun sonni kiriting: ');
// calculations();
// function calculations() {
//     if (A > B) {
//         A *= -1;
//         B *= -1;
//     }
// };


// if 10 chi masala

// let A = prompt('Butun son kiriting: ');
//     let B = prompt('2-butun sonni kiriting: ');
//     calculations();
//     function calculations() {
//         A = parseInt(A);
//         B = parseInt(B);
//         if (A != B) {
//             A += B;
//             B = A;
//         } else {
//             A = 0;
//             B = 0;
//         }
//     }


// if 11 chi masala

// let A = prompt('Butun son kiriting: ');
//     let B = prompt('2-butun sonni kiriting: ');
//     calculations();
//     function calculations() {
//         A = parseInt(A);
//         B = parseInt(B);
//         if (A == B) {
//             A = 0;
//             B = 0;
//         } else if (A > B) {
//             B = A;
//         } else {
//             A = B;
//         }
//     }

// if 12 chi masala

// let A = prompt('Butun son kiriting: ');
// let B = prompt('2-sonni kiriting: ');
// let C = prompt('3-sonni kiriting: ')
// let min;
// calculations();
// function calculations() {
//     A = parseInt(A);
//     B = parseInt(B);
//     C = parseInt(C);
//     min = A;
//     if (A > B) {
//         min = B;
//         if (C < B) {
//             min = C;
//         }
//     } else {
//         min = A;
//         if (A > C) {
//             min = C;
//         }
//     }
// }


// if 13 chi masala

// let A = prompt('Butun son kiriting: ');
// let B = prompt('2-sonni kiriting: ');
// let C = prompt('3-sonni kiriting: ')
// let middleNumber, max;
// calculations();
// function calculations() {
//     A = parseInt(A);
//     B = parseInt(B);
//     C = parseInt(C);
//     if (A > B) {
//         if (B > C) {
//             middleNumber = B;
//         } else if (A > C) {
//             middleNumber = C;
//         } else {
//             middleNumber = A;
//         }
//     } else {
//         if (A > C) {
//             middleNumber = A;
//         } else if (C > B) {
//             middleNumber = B;
//         } else {
//             middleNumber = C;
//         }
//     }
// }

// if 14 chi masala


// let A = prompt('Butun son kiriting: ');
//     let B = prompt('2-sonni kiriting: ');
//     let C = prompt('3-sonni kiriting: ')
//     let min, max;
//     calculations();
//     function calculations() {
//         A = parseInt(A);
//         B = parseInt(B);
//         C = parseInt(C);
//         if (A > B) {
//             max = A;
//             if (B < C) {
//                 min = B;
//                 if (A < C) {
//                     max = C;
//                 }
//             } else {
//                 min = C;
//             }
//         } else {
//             max = B;
//             if (A < C) {
//                 min = A;
//                 if (C > B) {
//                     max = C;
//                 }
//             } else {
//                 min = C;
//             }
//         }
//     }

// if 15 chi masala

// let A = prompt('Butun son kiriting: ');
// let B = prompt('2-sonni kiriting: ');
// let C = prompt('3-sonni kiriting: ')
// let min, max;
// calculations();
// function calculations() {
//     A = parseInt(A);
//     B = parseInt(B);
//     C = parseInt(C);
//     if (A > B) {
//         max = A;
//         if (B < C) {
//             min = B;
//             if (A < C) {
//                 max = C;
//             }
//         } else {
//             min = C;
//         }
//     } else {
//         max = B;
//         if (A < C) {
//             min = A;
//             if (C > B) {
//                 max = C;
//             }
//         } else {
//             min = C;
//         }
//     }
// }