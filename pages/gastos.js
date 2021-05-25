import React from "react";
import Layout from "../components/Layout";
import PieChart from '../components/charts/PieChart';
import GastosCard from '../components/cards/SmallCard'
import DeputadoCard from '../components/cards/BigCard'
import HorizBarChart from '../components/charts/GastosHorizontal'
import GeoGastos from '../components/charts/GeoGastos'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import styled from 'styled-components'
import VerticalBarChart from "../components/charts/GastosVertical";
import GastosList from "../components/lists/GastosList";
// import testData from "../testData/gastos.json"

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

const Gastos = ({ testData }) => {

  return (
    <Layout pageTitle="Gastos">
      <Grid container spacing={3} style={{ paddingTop: '12%', paddingBottom: '5%', width: '100%', margin: '0px' }}>
        <Grid item xs={12} sm={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={6} style={{ width: '100%', height: '100%' }}>
                <GastosCard
                  titulo='Gasto médio por deputado'
                  dado={testData.gastoMedio.toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={6} style={{ width: '100%', height: '100%' }}>
                <GastosCard
                  titulo='Gasto mediano dos deputados'
                  dado={testData.gastoMediano.toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })} />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={6} style={{ width: '100%', height: '100%' }}>
            <DeputadoCard
              titulo='Maior Gasto'
              nome={testData.deputadoGastoMaior.nomeEleitoral}
              partido={`${testData.deputadoGastoMaior.siglaPartido}-${testData.deputadoGastoMaior.siglaUf}`}
              porcentagem={testData.deputadoGastoMaior.gastoMedio.toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}
              foto={testData.deputadoGastoMaior.urlFoto + 'maior.jpg'}
              size='small' />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={6} style={{ width: '100%', height: '100%' }}>
            <DeputadoCard
              titulo='Menor Gasto'
              nome={testData.deputadoGastoMenor.nomeEleitoral}
              partido={`${testData.deputadoGastoMenor.siglaPartido}-${testData.deputadoGastoMenor.siglaUf}`}
              porcentagem={testData.deputadoGastoMenor.gastoMedio.toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}
              foto={testData.deputadoGastoMenor.urlFoto + 'maior.jpg'}
              size='small' />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={6} style={{ height: '100%', width: '100%' }}>
            <Typography variant='h6' align='center'>
              Maiores Gastos
            </Typography>
            <HorizBarChart data={testData.listaDeputadosMaioresGastos} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={6} style={{ height: '100%', width: '100%' }}>
            <Typography variant='h6' align='center'>
              Gastos por Região
            </Typography>
            <GeoGastos data={testData.gastosPorUnidadeFederativa} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={6} >
            <Typography variant='h6' align='center'>
              Gasto médio de cada deputado do partido
            </Typography>
            <VerticalBarChart data={testData.gastosPorPartido} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={6}>
            <GastosList data={testData.listaCompleta} />
          </Paper>
        </Grid>
      </Grid>
    </Layout >
  );
};

export async function getServerSideProps() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ADDR}/gastos`, { method: 'POST' })
  const testData = await res.json()

  return { props: { testData: testData.dados } }
}

export default Gastos;
