import React from "react";
import Layout from "../components/Layout";
import ReactECharts from 'echarts-for-react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Typography } from "@material-ui/core";
import PieChart from "../components/charts/PieChart";
import GastosCard from "../components/cards/SmallCard";
// import testData from "../testData/deputados.json"
/*
GRÁFICOS:
1 - Lista de todos os partidos
    CARDLIST
2 - Dados do Partido
    SUPER CARD
    2.1 - Nome
    2.2 - Sigla
    2.3 - Quantidade de Deputados em atuação
    2.4 - Média de Gastos, proposições e presença
*/

const Deputados = ({testData}) => {

  const [value, setValue] = React.useState(testData.deputados[0].nome);
  const [deputadoIndex, setDeputadoIndex] = React.useState(0);

  return (
    <Layout pageTitle="Deputados">
      <Grid container spacing={3} style={{ paddingTop: '12%', paddingBottom: '5%', width: '100%', margin: '0px' }}>
        <Grid item xs={12} md={3}>
          <Autocomplete
            id="combo-box-demo"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              setDeputadoIndex(testData.deputados.findIndex(deputado => {
                if (deputado.nome === newValue) {
                  return true
                }
              }))
            }}
            options={testData.listaDeputados}
            // getOptionLabel={(option) => option.title}
            renderInput={(params) => <TextField {...params} label="Deputado" variant="outlined" />}
          />
        </Grid>
        {
          value &&
          <Grid item xs={12} md={9}>
            <Paper elevation={3}>
              <Grid item xs={12}>
                <Typography variant='h6' align='center' style={{ paddingTop: '1em', paddingBottom: '1em' }}>
                  {value} ({testData.deputados[deputadoIndex].partido} - {testData.deputados[deputadoIndex].uf})
                </Typography>
              </Grid>
              <Grid container spacing={3} style={{ padding: '1em' }}>
                <Grid item xs={12} sm={4}>
                  <img height='350' width='300' src={`${testData.deputados[deputadoIndex].urlFoto}maior.jpg`} />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Grid container spacing={6}>
                    <Grid item xs={12}>
                      <Typography variant='body1' align='center'>
                        Média de gastos mensais deste deputado
                  </Typography>
                      <Typography variant='h4' align='center' style={{ paddingTop: '0.5em', paddingBottom: '0.5em' }} >
                        {testData.deputados[deputadoIndex].gastoMedio.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant='body1' align='center'>
                        Proposições nos últimos 30 dias
                  </Typography>
                      <Typography variant='h3' align='center' style={{ paddingTop: '0.5em', paddingBottom: '0.5em' }} >
                        {testData.deputados[deputadoIndex].proposicoes}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant='body1' align='center'>
                    Presença deste deputado
                  </Typography>
                  <PieChart textsize='36' data={[
                    { value: (Math.round(testData.deputados[deputadoIndex].presenca * 10000 + Number.EPSILON) / 100), name: 'Presença', selected: true },
                    { value: Math.round((100 - (Math.round(testData.deputados[deputadoIndex].presenca * 10000 + Number.EPSILON) / 100)) * 100) / 100, name: 'Falta' },
                  ]} />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        }

      </Grid>
    </Layout>
  );
};

export async function getServerSideProps() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ADDR}/deputados`, { method: 'POST' })
  const testData = await res.json()

  return { props: { testData: testData.dados } }
}

export default Deputados;
