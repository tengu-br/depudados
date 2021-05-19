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
import DeputadosList from "../components/lists/DeputadosList";
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

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];

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
      { value: '84.50%', name: 'Presença', selected: true },
      { value: '15.50%', name: 'Falta' },
    ]
  },
}

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
            options={top100Films}
            getOptionLabel={(option) => option.title}
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
                    {value.title}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant='body1' align='center' style={{ paddingTop: '1em', paddingBottom: '0.5em' }}>
                    Quantidade de Deputados em exercício
                </Typography>
                  <Typography variant='h3' align='center' >
                    18
                </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant='body1' align='center' style={{ paddingTop: '1em', paddingBottom: '1em' }}>
                    Média de Gastos por deputado deste partido
                </Typography>
                  <Typography variant='h5' align='center' >
                    R$ 12.730,00
                </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant='body1' align='center' style={{ paddingTop: '1em', paddingBottom: '0.5em' }}>
                    Média de Proposições por deputado deste partido
                </Typography>
                  <Typography variant='h3' align='center' >
                    12
                </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant='body1' align='center'>
                    Presença média por deputado
                  </Typography>
                  <PieChart textsize={prop.mock1.size} data={prop.mock1.data} name={prop.mock1.name} />
                </Grid>
                <Grid item xs={8}>
                  <DeputadosList elevation={0} />
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
