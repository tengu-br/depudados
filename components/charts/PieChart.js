import React, { useEffect, useRef } from "react";
import ReactECharts from 'echarts-for-react';

const PieChart = ({ name, data, textsize }) => {

  const chart = useRef(null);

  function selectDefault() {
    chart.current.getEchartsInstance().dispatchAction({
      type: 'select',
      seriesIndex: [0],
      dataIndex: [0]
    });
  }

  const option = {
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '80%'],
        avoidLabelOverlap: false,
        selectedMode: 'single',
        selectedOffset: 0,
        cursor: 'default',
        select: {
          label: {
            show: true,
          }
        },
        label: {
          show: false,
          position: 'center',
          fontSize: textsize,
          fontWeight: 'bold',
          formatter: '{c}%',
        },
        emphasis: {
          label: {
            show: false,
          },
        },
        labelLine: {
          show: false
        },
        data: data
      }
    ]
  }

  return (
    <ReactECharts
      option={option}
      notMerge={true}
      lazyUpdate={true}
      ref={chart}
      onEvents={{
        click: selectDefault
      }}
    />
  )
}

export default PieChart