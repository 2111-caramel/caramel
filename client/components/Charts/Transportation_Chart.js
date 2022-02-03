// import React, { Component, useState, useEffect } from 'react'
// import {connect} from 'react-redux'
// import { Pie } from 'react-chartjs-2'
// //import { getCity } from '../store/singleCity'

// const state = {
//     labels: ['January', 'February', 'March',
//              'April', 'May'],
//     datasets: [
//       {
//         label: 'Rainfall',
//         backgroundColor: [
//           '#B21F00',
//           '#C9DE00',
//           '#2FDE00',
//           '#00A6B4',
//           '#6800B4'
//         ],
//         hoverBackgroundColor: [
//         '#501800',
//         '#4B5000',
//         '#175000',
//         '#003350',
//         '#35014F'
//         ],
//         data: [65, 59, 80, 81, 56]
//       }
//     ]
//   }

// class Transportation_Chart extends React.Component {

    
//     render(){
//     //const transportation = this.props || {};
//     //const city = this.props.singleCity[0] || 0; 

//     return (
//       <div>
//         <Pie
//           data={state}
//           options={{
//             title:{
//               display:true,
//               text:'Average Rainfall per month',
//               fontSize:20
//             },
//             legend:{
//               display:true,
//               position:'right'
//             }
//           }}
//         />
//         {/* <h3>Transportation</h3>
//           <p>Bike: {transportation.bike}</p>
//           <p>Car: {transportation.car}</p>
//           <p>Train: {transportation.train}</p>
//       */}
//       </div> 
//     )}

// }

// export default Transportation_Chart;