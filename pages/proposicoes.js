import React from "react";
import Layout from "../components/Layout";
import PieChart from '../components/charts/PieChart';
import StatsCard from '../components/cards/SmallCard'
import ProposicoesCard from '../components/cards/BigCard'
import ProposicoesHorizontal from '../components/charts/ProposicoesHorizontal'
import VerticalBarChart from "../components/charts/ProposicoesVertical";
import ProposicoesList from "../components/lists/ProposicoesList";
import GeoProposicoes from '../components/charts/GeoProposicoes'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import styled from 'styled-components'
import testData from "../testData/proposicoes.json"

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
                <StatsCard
                  titulo='Média de proposições por deputado'
                  dado={Math.round(testData.proposicoesMedia)} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={6} style={{ width: '100%', height: '100%' }}>
                <StatsCard
                  titulo='Mediana de proposições dos deputados'
                  dado={testData.proposicoesMediana} />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={6} style={{ width: '100%', height: '100%' }}>
            <ProposicoesCard
              titulo='Menos Ativo'
              nome={testData.deputadoProposicoesMenor.nomeEleitoral}
              partido={`${testData.deputadoProposicoesMenor.siglaPartido}-${testData.deputadoProposicoesMenor.siglaUf}`}
              porcentagem={testData.deputadoProposicoesMenor.proposicoes}
              foto={testData.deputadoProposicoesMenor.urlFoto + 'maior.jpg'}
              size='large' />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={6} style={{ width: '100%', height: '100%' }}>
            <ProposicoesCard
              titulo='Mais ativo'
              nome={testData.deputadoProposicoesMaior.nomeEleitoral}
              partido={`${testData.deputadoProposicoesMaior.siglaPartido}-${testData.deputadoProposicoesMaior.siglaUf}`}
              porcentagem={testData.deputadoProposicoesMaior.proposicoes}
              foto={testData.deputadoProposicoesMaior.urlFoto + 'maior.jpg'}
              size='large' />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={6} style={{ height: '100%', width: '100%' }}>
            <Typography variant='h6' align='center'>
              Maior número de proposições
            </Typography>
            <ProposicoesHorizontal data={testData.listaDeputadosMaioresProposicoes} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={6} style={{ height: '100%', width: '100%' }}>
            <Typography variant='h6' align='center'>
              Atividade por região
            </Typography>
            <GeoProposicoes data={testData.proposicoesPorUnidadeFederativa} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={6} >
            <Typography variant='h6' align='center'>
              Média de proposições por partido (últimos 30 dias)
            </Typography>
            <VerticalBarChart data={testData.proposicoesPorPartido} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={6}>
            <ProposicoesList data={testData.listaCompleta} />
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Propostas;