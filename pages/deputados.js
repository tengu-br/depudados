import React from "react";
import Layout from "../components/Layout";
import ReactECharts from 'echarts-for-react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

/*
GRÁFICOS:
1 - Lista virtual de todos os deputados
    SEARCHABLE LIST
2 - Dados do Deputado
    SUPER CARD
*/

const Deputados = () => {
  return (
    <Layout pageTitle="Deputados">
      <Grid container spacing={3} style={{ paddingTop: '12%', paddingBottom: '5%' }}>
        <Grid item xs={12}>
          <Paper elevation={3}>Lista virtual de todos os deputados</Paper>
          <Paper elevation={3}>Dados do Deputado</Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Deputados;
