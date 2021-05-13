import React from "react";
import Layout from "../components/Layout";
import ReactECharts from 'echarts-for-react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
/*
GRÁFICOS:
1 - Lista de todos os partidos
    CARDLIST
2 - Dados do Partido
    SUPER CARD
*/

const Partidos = () => {
  return (
    <Layout pageTitle="Partidos">
      <Grid container spacing={3} style={{ paddingTop: '12%', paddingBottom: '5%' }}>
        <Grid item xs={12}>
          <Paper elevation={3}>Lista virtual de todos os partidos</Paper>
          <Paper elevation={3}>Dados do Partido</Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Partidos;
