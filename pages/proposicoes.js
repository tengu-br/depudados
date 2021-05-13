import React from "react";
import Layout from "../components/Layout";
import ReactECharts from 'echarts-for-react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
/*
GRÁFICOS:
1 - Quantidade média de proposições por deputado
    CARD
2 - Mais proposições
    CARD
3 - Menos proposições
    CARD
4 - Maiores quantidades de proposições
    BARRAS HORIZONTAIS
5 - Proposições por partido
    BARRAS VERTICAIS
6 - Proposições por região
    GEO/MAP
7 - Lista completa
    SEARCHABLE LIST
*/

const Propostas = () => {
    return (
        <Layout pageTitle="Propostas">
            <Grid container spacing={3} style={{ paddingTop: '12%', paddingBottom: '5%' }}>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3}>Quantidade média de proposições por deputado</Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3}>Mais proposições</Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3}>Menos proposições</Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3}>Maiores quantidades de proposições</Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3}>Proposições por região</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3}>Proposições por partido</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3}>Lista completa</Paper>
                </Grid>
            </Grid>
        </Layout>
    );
};

export default Propostas;
