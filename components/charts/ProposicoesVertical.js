import React, { useEffect, useRef } from "react";
import ReactECharts from 'echarts-for-react';

const VerticalBarChart = ({ name, data, textsize }) => {

  var xAxisData = []
  var yAxisData = []

  for (const sigla in data) {
    if (Object.hasOwnProperty.call(data, sigla)) {
      if (data[sigla].qtdDeputados !== 0) {
        xAxisData.push(sigla)
        yAxisData.push(Math.round(data[sigla].somaProposicoes / data[sigla].qtdDeputados +Number.EPSILON))
      }
    }
  }

  const chart = useRef(null);

  const option = {
    name: 'Teste',
    barMinWidth: 21,
    tooltip: {
      trigger: 'item',
    },
    xAxis: {
      type: 'category',
      data: xAxisData,
      axisLabel: {
        interval: 0,
        rotate: -25,
        width: 55,
        overflow:'truncate',
        padding: -10,
        margin: 16,
      }
    },
    yAxis: {
      type: 'value',
      min: 92,
    },
    series: [{
      data: yAxisData,
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