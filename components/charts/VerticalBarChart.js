import React, { useEffect, useRef } from "react";
import ReactECharts from 'echarts-for-react';

const VerticalBarChart = ({ name, data, textsize }) => {

  const chart = useRef(null);

  const option = {
    name: 'Teste',
    barMinWidth: 21,
    tooltip: {
      trigger: 'item',
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Oit', 'Nov', 'Dez', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Oit', 'Nov', 'Dez', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Oit', 'Nov', 'Dez', 'Trez', 'Twe', 'Gow']
    },
    yAxis: {
      type: 'value',
      min: 50,
    },
    series: [{
      data: [120, 200, 150, 80, 70, 110, 130, 88, 190, 75, 120, 200, 150, 80, 70, 110, 130, 88, 190, 75, 120, 200, 150, 80, 70, 110, 130, 88, 190, 75, 96, 100, 150],
      type: 'bar'
    }]
  }

  return (
    <ReactECharts
      option={option}
      notMerge={true}
      lazyUpdate={true}
      ref={chart}
    />
  )
}

export default VerticalBarChart