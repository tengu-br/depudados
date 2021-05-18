import React, { useEffect, useRef } from "react";
import ReactECharts from 'echarts-for-react';
import { registerMap } from 'echarts'
import brasilJson from './GeoJSON/brasil.json'
const GeoPresenca = ({ name, data, textsize }) => {

  const chart = useRef(null);


  registerMap('BR', brasilJson, { 'Distrito Federal': {
    left: -70,
    top: -20,
    width: 3
},});


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
      min: 75,
      max: 100,
      inRange: {
        color: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695']
      },
      text: ['Alta', 'Baixa'],
      calculable: true
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'left',
      top: 'top',
      feature: {
          dataView: {readOnly: true, title: 'Lista de dados'},
          restore: {title: 'Restaurar'},
          saveAsImage: {title:'Salvar como imagem'}
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
        data: [
          { name: 'Acre', value: 80 },
          { name: 'Alagoas', value: 91 },
          { name: 'Amapá', value: 100 },
          { name: 'Amazonas', value: 75 },
          { name: 'Bahia', value: 98 },
          { name: 'Ceará', value: 90 },
          { name: 'Distrito Federal', value: 94 },
          { name: 'Espírito Santo', value: 81 },
          { name: 'Goiás', value: 70 },
          { name: 'Maranhão', value: 100 },
          { name: 'Mato Grosso', value: 99 },
          { name: 'Mato Grosso do Sul', value: 98 },
          { name: 'Minas Gerais', value: 97 },
          { name: 'Pará', value: 95 },
          { name: 'Paraíba', value: 90 },
          { name: 'Paraná', value: 80 },
          { name: 'Pernambuco', value: 100 },
          { name: 'Piauí', value: 99 },
          { name: 'Rio de Janeiro', value: 98 },
          { name: 'Rio Grande do Norte', value: 90 },
          { name: 'Rio Grande do Sul', value: 91 },
          { name: 'Rondônia', value: 78 },
          { name: 'Roraima', value: 100 },
          { name: 'Santa Catarina', value: 100 },
          { name: 'São Paulo', value: 99 },
          { name: 'Sergipe', value: 98 },
          { name: 'Tocantins', value: 97 }
        ]
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

