import React from "react";
import Layout from "../components/Layout";
import PieChart from '../components/charts/PieChart';
import PresencaCard from '../components/cards/PresencaCard'
import HorizBarChart from '../components/charts/HorizBarChart'
import GeoPresenca from '../components/charts/GeoPresenca'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import styled from 'styled-components'

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
    <Layout pageTitle="Presença">
      <Grid container spacing={3} style={{ paddingTop: '12%', paddingBottom: '5%', width: '100%', margin: '0px' }}>
        <Grid item xs={12} sm={12} md={4}>
          <Paper elevation={6} style={{ width: '100%', height: '100%' }}>
            <Typography variant='h6' align='center'>
              Presença média por deputado
                        </Typography>
            <PieChart textsize={prop.mock1.size} data={prop.mock1.data} name={prop.mock1.name} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={6} style={{ width: '100%', height: '100%' }}>
            <PresencaCard
              titulo='Mais Faltão'
              nome='Adriano do Baldy'
              partido='PP-GO'
              porcentagem='84.5%'
              faltas='16 Faltas não justificadas' />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={6} style={{ width: '100%', height: '100%' }}>
            <PresencaCard
              titulo='Sempre Presente'
              nome='Afonso Florence'
              partido='PT-BA'
              porcentagem='100%'
              faltas='0 Faltas não justificadas' />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={6} style={{ height: '100%', width: '100%' }}>
            <Typography variant='h6' align='center'>
              Piores presenças
                        </Typography>
            <HorizBarChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={6}>
            <Typography variant='h6' align='center'>
              Presença por região
            </Typography>
            <GeoPresenca />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={6}>Presença por partido</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={6}>Lista completa</Paper>
        </Grid>
      </Grid>
    </Layout >
  );
};
export default Presenca;
