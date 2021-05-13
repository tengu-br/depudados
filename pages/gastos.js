import React from "react";
import Layout from "../components/Layout";
import ReactECharts from 'echarts-for-react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
/*
GRÁFICOS:
1 - Gastos médios da câmara dos deputados
    CARD
2 - Mais gastão
    CARD
3 - Mais austero
    CARD
4 - Maiores gastos
    BARRAS HORIZONTAIS
5 - Gastos por partido
    BARRAS VERTICAIS
6 - Gastos por região
    GEO/MAP
7 - Lista completa
    SEARCHABLE LIST
*/

const Gastos = () => {
  return (
    <Layout pageTitle="Gastos">
        <Grid container spacing={3} style={{ paddingTop: '12%', paddingBottom: '5%' }}>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3}>Gastos médios por deputado</Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3}>Mais Gastão</Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3}>Mais austero</Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3}>Maiores gastos</Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3}>Gasto médio por região</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3}>Gasto médio por partido</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3}>Lista completa</Paper>
                </Grid>
            </Grid>
    </Layout>
  );
};

export default Gastos;
