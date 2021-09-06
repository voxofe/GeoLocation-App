// import * as CanvasJS from 'canvasjs';
import React from "react";
import {CanvasJSChart} from 'canvasjs-react-charts'
// import {CanvasJsReact} from 'canvasjs-react'
import "../styles/AdminChart.css";

const AdminChart = ()=>{


// function AdminChart(){
    
    
    // const options = {
    //     animationEnabled: true,
    //     exportEnabled: true,
    //     theme: "dark1",
    //     title:{
    //         text: "Response Time Analysis"  
    //     },
    //     axisY:{
    //         includeZero: true
    //     },
    //     data:[{
    //         labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
    //         type: "column",
    //         indexLabelFontColor: "#5A5757",
    //         indexLabelPlacement: "outside",
    //         data:[ 1, 1 ,1, 1, 1 ,1, 1, 1 ,1, 1, 1 ,1, 1, 1 ,1, 1, 1 ,1,1, 1 ,1,1, 1 ,1 ],
    //         label: ["Chart per CONTENT-TYPE"]
    //     }]
    // }


    return(
      <div>
          
          <link rel="stylesheet" href="multiple-select.min.css"></link>
          {/* <CanvasJSChart options = {options}/> */}
         
            <div class="wrap">
            <span class="decor"></span>  
            <nav>
              <ul class="primary"> 
              <li>
                 <a href="#">Context </a>
                 <ul class="sub">
                  <li><a href="#">Images</a></li>
                  <li><a href="#">Text</a></li>
                  <li><a href="#">Javascript App</a></li>
                  <li><a href="#">X-mpegURL</a></li>
                  <li><a href="#">Videos</a></li>
                  <li><a href="#">Font</a></li>
                  <li><a href="#">Html</a></li>
                  </ul>
                </li>
               
              
              <li>
              <a href="">Day Of the Week</a>
              <ul class="sub">
                  <li><a href="#">Monday</a></li>
                  <li><a href="#">Tuesday</a></li>
                  <li><a href="#">Wednesday</a></li>
                  <li><a href="#">Thursday</a></li>
                  <li><a href="#">Friday</a></li>
                  <li><a href="#">Saturday</a></li>
                  <li><a href="#">Sunday</a></li>
              </ul>
              </li>

              <li>
              <a href="">HTTP Method</a>
              <ul class="sub">
                  <li><a href="#">GET</a></li>
                  <li><a href="#">POST</a></li>
                  <li><a href="#">OPTIONS</a></li>
               </ul>
              </li>

              <li>
              <a href="">Internet Service Provider</a>
              <ul class="sub">
                  <li><a href="#">OTE</a></li>
                  <li><a href="#">Vodafone</a></li>
                  <li><a href="#">Forthnet</a></li>
                  <li><a href="#">Cosmote</a></li>
                  <li><a href="#">Net One</a></li>
                  </ul>
              </li>

              
           </ul>   
          </nav>
          </div>
          
          
          <script src="jquery.min.js"></script>
          <script src="multiple-select.min.js"></script>

          
      </div>
  );
}

export default AdminChart;