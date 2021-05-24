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
import PartidosList from "../components/lists/PartidosList";
import testData from "../testData/partidos.json"

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

const Partidos = () => {

  const [value, setValue] = React.useState();

  return (
    <Layout pageTitle="Partidos">
      <Grid container spacing={3} style={{ paddingTop: '12%', paddingBottom: '5%', width: '100%', margin: '0px' }}>
        <Grid item xs={12} md={3}>
          <Autocomplete
            id="combo-box-demo"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            options={testData.listaPartidos}
            // getOptionLabel={(option) => option.title}
            renderInput={(params) => <TextField {...params} label="Partido" variant="outlined" />}
          />
        </Grid>
        {
          value &&
          <Grid item xs={12} md={9}>
            <Paper elevation={3}>
              <Grid container spacing={3} style={{ padding: '1em' }}>
                <Grid item xs={12}>
                  <Typography variant='h6' align='center' style={{ paddingTop: '1em' }}>
                    {value}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant='body1' align='center' style={{ paddingTop: '1em', paddingBottom: '0.5em' }}>
                    Quantidade de Deputados em exercício
                </Typography>
                  <Typography variant='h3' align='center' >
                    {testData.dadosPartidos[value].qtdDeputados}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant='body1' align='center' style={{ paddingTop: '1em', paddingBottom: '1em' }}>
                    Média de Gastos por deputado deste partido
                </Typography>
                  <Typography variant='h5' align='center' >
                    {
                      testData.dadosPartidos[value].qtdDeputados === 0 ?
                        ('R$ 0,00')
                        :
                        (Math.round(testData.dadosPartidos[value].somaGastos / testData.dadosPartidos[value].qtdDeputados * 100 + Number.EPSILON) / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })
                    }
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant='body1' align='center' style={{ paddingTop: '1em', paddingBottom: '0.5em' }}>
                    Média de Proposições por deputado deste partido
                </Typography>
                  <Typography variant='h3' align='center' >
                    {
                      testData.dadosPartidos[value].qtdDeputados === 0 ?
                        ('N/A')
                        :
                        Math.round(testData.dadosPartidos[value].somaProposicoes / testData.dadosPartidos[value].qtdDeputados + Number.EPSILON)
                    }
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant='body1' align='center'>
                    Presença média por deputado
                  </Typography>
                  {
                    testData.dadosPartidos[value].qtdDeputados === 0 ?
                      <Typography variant='h3' align='center' >
                        N/A
                      </Typography>
                      :
                      (
                        <PieChart
                          textsize='36'
                          data={[
                            { value: (Math.round((testData.dadosPartidos[value].somaPresenca / testData.dadosPartidos[value].qtdDeputados + Number.EPSILON) * 10000) / 100), name: 'Presença', selected: true },
                            { value: Math.round((100 - (Math.round(testData.dadosPartidos[value].somaPresenca / testData.dadosPartidos[value].qtdDeputados * 10000 + Number.EPSILON) / 100)) * 100) / 100, name: 'Falta' },
                          ]} />
                      )
                  }
                </Grid>
                <Grid item xs={8}>
                  {
                    testData.dadosPartidos[value].qtdDeputados === 0 ?
                      (null)
                      :
                      (
                        <PartidosList data={testData.dadosPartidos[value].deputados} elevation={0} />
                      )
                  }
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        }

      </Grid>
    </Layout>
  );
};

export default Partidos;
