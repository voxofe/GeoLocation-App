import React, {useState, useEffect} from "react";
import "../styles/AdminChart.css";
import {
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

import arraych from '../scripts/waitDataArray'

function AdminChart(props){
  const dataW= arraych(props.waitChartData)

    return(
      <div style={{ textAlign: "center" }}>
      
      <div className="App">
       
        <BarChart
          width={500}
          height={300}
          data={dataW}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="isp"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis  
           dataKey= 'wait' 
           />

          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          {dataW.map((entry=>(
            <Bar 
            fill="#8884d8" background={{ fill: "#eee" }} />
          )))}
        </BarChart>
        
      </div>
    </div>
  )
}

export default AdminChart;