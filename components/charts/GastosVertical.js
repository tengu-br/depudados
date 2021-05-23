import React, { useEffect, useRef } from "react";
import ReactECharts from 'echarts-for-react';

const VerticalBarChart = ({ name, data, textsize }) => {

  var xAxisData = []
  var yAxisData = []

  for (const sigla in data) {
    if (Object.hasOwnProperty.call(data, sigla)) {
      if (data[sigla].qtdDeputados !== 0) {
        xAxisData.push(sigla)
        yAxisData.push(data[sigla].somaGastos / data[sigla].qtdDeputados)
      }
    }
  }

  const chart = useRef(null);

  const option = {
    name: 'Teste',
    barMinWidth: 21,
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        return '<b>' + params.name + '</b>: ' + params.value.toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });
      }
    },
    xAxis: {
      type: 'category',
      data: xAxisData,
      axisLabel: {
        interval: 0,
        rotate: -25,
        width: 55,
        overflow: 'truncate',
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