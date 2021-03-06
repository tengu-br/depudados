import React, { useEffect, useRef } from "react";
import ReactECharts from 'echarts-for-react';
import { registerMap } from 'echarts'
import brasilJson from './GeoJSON/brasil.json'
const GeoPresenca = ({ name, data, textsize }) => {

  var compiledData = []

  for (const uf in data) {
    if (Object.hasOwnProperty.call(data, uf)) {
      compiledData.push({ name: data[uf].nome, value: Math.round(data[uf].somaPresenca / data[uf].qtdDeputados * 10000 + Number.EPSILON)/100 })
    }
  }
  
  const chart = useRef(null);


  registerMap('BR', brasilJson, {
    'Distrito Federal': {
      left: -70,
      top: -20,
      width: 4
    },
  });


  const option = {
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: function (params) {
        return params.seriesName + '<br/>' + params.name + ': ' + params.value + '%';
      }
    },
    visualMap: {
      left: 'right',
      min: 92,
      max: 100,
      inRange: {
        color: ['#b70303','#f47c7c','#82a9ff','#5357F0']
      },
      text: ['Alta', 'Baixa'],
      calculable: true,
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'left',
      top: 'top',
      feature: {
        dataView: { readOnly: true, title: 'Lista de dados' },
        saveAsImage: { title: 'Salvar como imagem' }
      }
    },
    series: [
      {
        name: 'Presença',
        selectedMode: false,
        type: 'map',
        roam: false,
        map: 'BR',
        emphasis: {
          label: {
            show: true
          }
        },
        data: compiledData
      }
    ]
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

export default GeoPresenca

