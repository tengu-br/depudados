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
      <Grid container spacing={3} style={{ paddingTop: '12%', paddingBottom: '5%', width: '100%', margin: '0px' }}>
        <Grid item xs={12} sm={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={6} style={{ width: '100%', height: '100%' }}>
                <GastosCard
                  titulo='Média de proposições por deputado'
                  nome='18' />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={6} style={{ width: '100%', height: '100%' }}>
                <GastosCard
                  titulo='Mediana de proposições dos deputados'
                  nome='R$ 31.021,50' />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={6} style={{ width: '100%', height: '100%' }}>
            <PresencaCard
              titulo='Menos Ativo'
              nome='Adriano do Baldy'
              partido='PP-GO'
              porcentagem='2 proposições'
              size='small' />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={6} style={{ width: '100%', height: '100%' }}>
            <PresencaCard
              titulo='Mais Ativo'
              nome='Afonso Florence'
              partido='PT-BA'
              porcentagem='24 proposições'
              size='small' />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={6} style={{ height: '100%', width: '100%' }}>
            <Typography variant='h6' align='center'>
              Menor número de proposições
                        </Typography>
            <HorizBarChart />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={6} style={{ height: '100%', width: '100%' }}>
            <Typography variant='h6' align='center'>
              Atividade por região
            </Typography>
            <GeoPresenca />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={6} >
            <Typography variant='h6' align='center'>
              Média de proposições por partido
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
    </Layout>
  );
};

export default Propostas;