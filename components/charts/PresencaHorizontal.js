import React, { useEffect, useRef } from "react";
import ReactECharts from 'echarts-for-react';

const HorizBarChart = ({ name, data, textsize }) => {

  if (data[data.length-1].presencaSessoes > data[0].presencaSessoes) {
    data.reverse()
  }


  var yAxisData = []
  data.map((deputado) => {
    yAxisData.push(deputado.nomeEleitoral)
  })

  var xAxisData = []
  data.map((deputado) => {
    xAxisData.push(Math.round(deputado.presencaSessoes * 10000 + Number.EPSILON) / 100)
  })

  const chart = useRef(null);

  const option = {
    grid: {
      left: 100,
      top: 8,
    },
    name: 'Teste',
    tooltip: {
      trigger: 'item',
    },
    xAxis: {
      type: 'value',
      min: 0,
      max: 100,
    },
    yAxis: {
      type: 'category',
      data: yAxisData,
      axisLabel: {
        interval: 0,
        rotate: 30
      }
    },
    series: [{
      data: xAxisData,
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

export default HorizBarChart