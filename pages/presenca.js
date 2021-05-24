import React from "react";
import Layout from "../components/Layout";
import PieChart from '../components/charts/PieChart';
import PresencaCard from '../components/cards/BigCard'
import HorizBarChart from '../components/charts/PresencaHorizontal'
import GeoPresenca from '../components/charts/GeoPresenca'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import styled from 'styled-components'
import VerticalBarChart from "../components/charts/PresencaVertical";
import DeputadosList from "../components/lists/PresencaList";
import testData from "../testData/presenca.json"

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

  return (
    <Layout pageTitle="Presença">
      <Grid container spacing={3} style={{ paddingTop: '12%', paddingBottom: '5%', width: '100%', margin: '0px' }}>
        <Grid item xs={12} sm={12} md={4}>
          <Paper elevation={6} style={{ width: '100%', height: '100%' }}>
            <Typography variant='h6' align='center'>
              Presença média por deputado
                        </Typography>
            <PieChart textsize='36' data={[
              { value: (Math.round((testData.presencaMedia + Number.EPSILON) * 10000) / 100), name: 'Presença', selected: true },
              { value: Math.round((100 - (Math.round(testData.presencaMedia * 10000 + Number.EPSILON) / 100)) * 100) / 100, name: 'Falta' },
            ]} name='Presença' />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={6} style={{ width: '100%', height: '100%' }}>
            <PresencaCard
              titulo='Mais Faltão'
              nome={testData.deputadoPresencaMenor.nomeEleitoral}
              partido={`${testData.deputadoPresencaMenor.siglaPartido}-${testData.deputadoPresencaMenor.siglaUf}`}
              porcentagem={`${Math.round((testData.deputadoPresencaMenor.presencaSessoes + Number.EPSILON) * 10000) / 100}%`}
              foto={testData.deputadoPresencaMenor.urlFoto + 'maior.jpg'}
              size='large' />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={6} style={{ width: '100%', height: '100%' }}>
            <PresencaCard
              titulo='Sempre Presente'
              nome={testData.deputadoPresencaMaior.nomeEleitoral}
              partido={`${testData.deputadoPresencaMaior.siglaPartido}-${testData.deputadoPresencaMaior.siglaUf}`}
              porcentagem={`${Math.round((testData.deputadoPresencaMaior.presencaSessoes + Number.EPSILON) * 10000) / 100}%`}
              foto={testData.deputadoPresencaMaior.urlFoto + 'maior.jpg'}
              size='large' />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={6} style={{ height: '100%', width: '100%' }}>
            <Typography variant='h6' align='center'>
              Piores presenças
                        </Typography>
            <HorizBarChart data={testData.listaDeputadosPioresPresencas} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={6} style={{ height: '100%', width: '100%' }}>
            <Typography variant='h6' align='center'>
              Presença por região
            </Typography>
            <GeoPresenca data={testData.presencaPorUnidadeFederativa} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={6} >
            <Typography variant='h6' align='center'>
              Presença média por partido
            </Typography>
            <VerticalBarChart data={testData.presencaPorPartido} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={6}>
            <DeputadosList data={testData.listaCompleta} />
          </Paper>
        </Grid>
      </Grid>
    </Layout >
  );
};
export default Presenca;