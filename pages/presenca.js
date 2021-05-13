import React from "react";
import Layout from "../components/Layout";
import ReactECharts from 'echarts-for-react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

/*
GRÁFICOS:
1 - Presença média da câmara dos deputados
    DONUT
2 - Mais faltão
    CARD
3 - Sempre presente
    CARD
4 - Piores presenças
    BARRAS HORIZONTAIS
5 - Presença por partido
    BARRAS VERTICAIS
6 - Presença por região
    GEO/MAP
7 - Lista completa
    SEARCHABLE LIST
*/


const Presenca = () => {

    const data = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center'
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '40',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: '搜索引擎' },
                    { value: 735, name: '直接访问' },
                    { value: 580, name: '邮件营销' },
                    { value: 484, name: '联盟广告' },
                    { value: 300, name: '视频广告' }
                ]
            }
        ]
    }
    {/* <ReactECharts
                        option={data}
                        notMerge={true}
                        lazyUpdate={true}
                        theme={"theme_name"}
                    /> */}
    return (
        <Layout pageTitle="Presença">
            <Grid container spacing={3} style={{ paddingTop: '12%', paddingBottom: '5%' }}>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3}>Presença média</Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3}>Mais Faltão</Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3}>Sempre Presente</Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3}>Piores presenças</Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3}>Presença por região</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3}>Presença por partido</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3}>Lista completa</Paper>
                </Grid>
            </Grid>
        </Layout>
    );
};
export default Presenca;
