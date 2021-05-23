import React, { useEffect, useRef } from "react";
import ReactECharts from 'echarts-for-react';
import { registerMap } from 'echarts'
import brasilJson from './GeoJSON/brasil.json'
const GeoPresenca = ({ name, data, textsize }) => {

  var compiledData = []

  for (const uf in data) {
    if (Object.hasOwnProperty.call(data, uf)) {
      compiledData.push({ name: data[uf].nome, value: data[uf].somaGastos / data[uf].qtdDeputados })
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
        return params.seriesName + '<br/><b>' + params.name + '</b>: ' + params.value.toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });
      }
    },
    visualMap: {
      left: 'right',
      min: 15000,
      max: 40000,
      inRange: {
        color: ['#5357F0','#82a9ff','#f47c7c','#b70303']
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
        name: 'Média de Gastos',
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

