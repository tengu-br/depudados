import React, { useEffect, useRef } from "react";
import ReactECharts from 'echarts-for-react';
import { registerMap } from 'echarts'
import brasilJson from './GeoJSON/brasil.json'
const GeoPresenca = ({ name, data, textsize }) => {

  var compiledData = []

  for (const uf in data) {
    if (Object.hasOwnProperty.call(data, uf)) {
      compiledData.push({ name: data[uf].nome, value: Math.round(data[uf].somaPresenca / data[uf].qtdDeputados * 100 + Number.EPSILON) })
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
        var value = (params.value + '').split('.');
        value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
        return params.seriesName + '<br/>' + params.name + ': ' + value + '%';
      }
    },
    visualMap: {
      left: 'right',
      min: 92,
      max: 100,
      inRange: {
        color: ['#A38818','#F0D154','#9C9FFF','#5357F0']
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

