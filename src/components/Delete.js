
// // problem of asynchronous JavaScript 
// // ----------------------------------
// const getInfo = () => {
//     console.log('getInfo');
//     setTimeout(() => {
//         return { info: 'This is the info.' };
//     }, 1000);
// };

// const data = getInfo();
// console.log(data.info);
// // TypeError: Cannot read properties of undefined (reading 'info')


// Solution 1 - callback  
// ----------------------------------
// Callback pattern
// Passing a function as an argument to another function 
// Basic way to handle async operations by passing functions as args 

// const getInfo = (arg) => {
//     console.log('getInfo');
//     setTimeout(() => {
//         arg({ info: 'This is the info.' }); // function call 
//     }, 1000);
// };

// // getInfo(() => { });

// getInfo((abc) => {
//     console.log('callback function');
//     console.log(abc.info);
// });

// Callback composition
// Combination of multiple nested callbacks 


// const getInfo = (arg) => {
//     console.log('getInfo');
//     setTimeout(() => {
//         arg({ info: 'This is the info.' }); // function call 
//     }, 1000);
// };

// // getInfo(() => { });

// getInfo((abc) => {
//     console.log('callback function');
//     console.log(abc.info);
// });

// fun1 = (fun1arg) => {
//     console.log('fun1');
//     setTimeout(() => {
//         fun1arg((arg2) => {
//             console.log(arg2);
//         });
//     }, 1000);
// };

// fun1((arg3) => {
//     console.log('anonymous funciton');
//     arg3('some value');
// });


// Callback Hell
// Bad result of excessive nested callbacks 

fun1 = (fun1arg) => {
    console.log('fun1');
    setTimeout(() => {
        fun1arg((arg2) => {
            console.log('fin1arg');
            arg2('some another value');
        });
    }, 1000);
};

fun1((arg3) => {
    console.log('anonymous funciton');
    arg3((arg4) => {
        arg4((arg5) => { console.log(arg5); });
    });
});


// constructor patterns demo
// import React from "react";

// class Delete extends React.Component {

//     constructor() {
//         this.state = { username: 'sonu' };
//     }

//     render() {
//         return (
//             <>
//                 <p>Delete</p>
//             </>
//         );
//     }
// };

// export default Delete;



// // const Delete = () => {
// //     return (
// //         <>
// //             <p>Delete</p>
// //         </>
// //     );
// // };

// // export default Delete;
