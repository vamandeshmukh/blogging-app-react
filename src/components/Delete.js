
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
const getInfo = (arg) => {
    console.log('getInfo');
    setTimeout(() => {
        arg({ info: 'This is the info.' }); // function call 
    }, 1000);
};

getInfo((abc) => {
    console.log('callback function');
    console.log(abc.info);
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
