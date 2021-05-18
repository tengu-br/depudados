import React from "react";
import Layout from "../components/Layout";
import PieChart from '../components/charts/PieChart';
import GastosCard from '../components/cards/SmallCard'
import PresencaCard from '../components/cards/BigCard'
import HorizBarChart from '../components/charts/HorizBarChart'
import GeoPresenca from '../components/charts/GeoPresenca'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import styled from 'styled-components'
import VerticalBarChart from "../components/charts/VerticalBarChart";
import DeputadosList from "../components/lists/DeputadosList";

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
  const prop = {
    mock1: {
      name: 'Presença',
      size: '36',
      data: [
        { value: 91.87, name: 'Presença', selected: true },
        { value: 8.13, name: 'Falta' },
      ]
    },
    mock2: {
      name: 'Presença',
      size: '18',
      data: [
        { value: 84.50, name: 'Presença', selected: true },
        { value: 15.50, name: 'Falta' },
      ]
    },
  }
  return (
    <Layout pageTitle="Gastos">
      <Grid container spacing={3} style={{ paddingTop: '12%', paddingBottom: '5%', width: '100%', margin: '0px' }}>
        <Grid item xs={12} sm={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={6} style={{ width: '100%', height: '100%' }}>
                <GastosCard
                  titulo='Gasto médio por deputado'
                  nome='R$ 33.193,00' />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={6} style={{ width: '100%', height: '100%' }}>
                <GastosCard
                  titulo='Gasto mediano dos deputados'
                  nome='R$ 31.021,50' />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={6} style={{ width: '100%', height: '100%' }}>
            <PresencaCard
              titulo='Mais Gastão'
              nome='Adriano do Baldy'
              partido='PP-GO'
              porcentagem='R$ 58.213,00'
              size='small' />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={6} style={{ width: '100%', height: '100%' }}>
            <PresencaCard
              titulo='Mais Austero'
              nome='Afonso Florence'
              partido='PT-BA'
              porcentagem='R$ 0,00'
              size='small' />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={6} style={{ height: '100%', width: '100%' }}>
            <Typography variant='h6' align='center'>
              Maiores Gastos
                        </Typography>
            <HorizBarChart />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={6} style={{ height: '100%', width: '100%' }}>
            <Typography variant='h6' align='center'>
              Gastos por Região
            </Typography>
            <GeoPresenca />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={6} >
            <Typography variant='h6' align='center'>
              Gasto médio por partido
            </Typography>
            <VerticalBarChart />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={6}>
            <DeputadosList />
          </Paper>
        </Grid>
      </Grid>
    </Layout >
  );
};

export default Gastos;
