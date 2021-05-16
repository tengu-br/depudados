import React, { useEffect, useRef } from "react";
import ReactECharts from 'echarts-for-react';

const HorizBarChart = ({ name, data, textsize }) => {

  const chart = useRef(null);
  
  const option = {
    name: 'Teste',
    barMinWidth: 21,
    tooltip: {
      trigger: 'item',
    },
    xAxis: {
      type: 'value',
      min: 50,
    },
    yAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Oit', 'Nov', 'Dez']
    },
    series: [{
      data: [120, 200, 150, 80, 70, 110, 130, 88, 190, 75],
      type: 'bar'
    }]
  }

  return (
    <ReactECharts
      option={option}
      notMerge={true}
      lazyUpdate={true}
      ref={chart}
      style={{ height: '100%', width: '100%' }}
    />
  )
}

export default HorizBarChart