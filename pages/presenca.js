import React from "react";
import Layout from "../components/Layout";
import PieChart from '../components/charts/PieChart';
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
        { value: '84.50%', name: 'Presença', selected: true },
        { value: '15.50%', name: 'Falta' },
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
            <PieChart textsize='36' data={[
              { value: (Math.round((testData.presencaMedia + Number.EPSILON) * 100)), name: 'Presença', selected: true },
              { value: 100 - (Math.round((testData.presencaMedia + Number.EPSILON) * 100)), name: 'Falta' },
            ]} name='Presença' />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={6} style={{ width: '100%', height: '100%' }}>
            <PresencaCard
              titulo='Mais Faltão'
              nome={testData.deputadoPresencaMenor.nomeEleitoral}
              partido={`${testData.deputadoPresencaMenor.siglaPartido}-${testData.deputadoPresencaMenor.siglaUf}`}
              porcentagem={`${Math.round((testData.deputadoPresencaMenor.presencaSessoes + Number.EPSILON) * 100)}%`}
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
              porcentagem={`${Math.round((testData.deputadoPresencaMaior.presencaSessoes + Number.EPSILON) * 100)}%`}
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
            <GeoPresenca data={testData.presencaPorUnidadeFederativa}/>
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

const testData = {
  "listaCompleta": [
    {
      "nome": "Milton Coelho",
      "partido": "PSB",
      "uf": "PE",
      "presencaSessoes": 0.5
    },
    {
      "nome": "Guilherme Mussi",
      "partido": "PP",
      "uf": "SP",
      "presencaSessoes": 0.7692307692307693
    },
    {
      "nome": "Sebastião Oliveira",
      "partido": "AVANTE",
      "uf": "PE",
      "presencaSessoes": 0.8037383177570093
    },
    {
      "nome": "José Priante",
      "partido": "MDB",
      "uf": "PA",
      "presencaSessoes": 0.8130841121495327
    },
    {
      "nome": "Vinicius Gurgel",
      "partido": "PL",
      "uf": "AP",
      "presencaSessoes": 0.8181818181818182
    },
    {
      "nome": "Igor Kannário",
      "partido": "DEM",
      "uf": "BA",
      "presencaSessoes": 0.8271028037383178
    },
    {
      "nome": "Genecias Noronha",
      "partido": "SOLIDARIEDADE",
      "uf": "CE",
      "presencaSessoes": 0.8551401869158879
    },
    {
      "nome": "Bosco Saraiva",
      "partido": "SOLIDARIEDADE",
      "uf": "AM",
      "presencaSessoes": 0.883177570093458
    },
    {
      "nome": "Marcelo Aro",
      "partido": "PP",
      "uf": "MG",
      "presencaSessoes": 0.8878504672897196
    },
    {
      "nome": "Junior Lourenço",
      "partido": "PL",
      "uf": "MA",
      "presencaSessoes": 0.8878504672897196
    },
    {
      "nome": "Aline Gurgel",
      "partido": "REPUBLICANOS",
      "uf": "AP",
      "presencaSessoes": 0.8878504672897196
    },
    {
      "nome": "Josimar Maranhãozinho",
      "partido": "PL",
      "uf": "MA",
      "presencaSessoes": 0.8960396039603961
    },
    {
      "nome": "Sérgio Brito",
      "partido": "PSD",
      "uf": "BA",
      "presencaSessoes": 0.8990825688073395
    },
    {
      "nome": "Pedro Augusto Palareti",
      "partido": "PSD",
      "uf": "RJ",
      "presencaSessoes": 0.9
    },
    {
      "nome": "Luciano Ducci",
      "partido": "PSB",
      "uf": "PR",
      "presencaSessoes": 0.9018691588785047
    },
    {
      "nome": "Magda Mofatto",
      "partido": "PL",
      "uf": "GO",
      "presencaSessoes": 0.9018691588785047
    },
    {
      "nome": "Felipe Carreras",
      "partido": "PSB",
      "uf": "PE",
      "presencaSessoes": 0.9065420560747663
    },
    {
      "nome": "Moses Rodrigues",
      "partido": "MDB",
      "uf": "CE",
      "presencaSessoes": 0.9096385542168675
    },
    {
      "nome": "Severino Pessoa",
      "partido": "REPUBLICANOS",
      "uf": "AL",
      "presencaSessoes": 0.9112149532710281
    },
    {
      "nome": "Laercio Oliveira",
      "partido": "PP",
      "uf": "SE",
      "presencaSessoes": 0.9112149532710281
    },
    {
      "nome": "Marcelo Brum",
      "partido": "PSL",
      "uf": "RS",
      "presencaSessoes": 0.9183673469387755
    },
    {
      "nome": "Vicentinho Júnior",
      "partido": "PL",
      "uf": "TO",
      "presencaSessoes": 0.9205607476635514
    },
    {
      "nome": "Hercílio Coelho Diniz",
      "partido": "MDB",
      "uf": "MG",
      "presencaSessoes": 0.9205607476635514
    },
    {
      "nome": "Pastor Gil",
      "partido": "PL",
      "uf": "MA",
      "presencaSessoes": 0.9252336448598131
    },
    {
      "nome": "Loester Trutis",
      "partido": "PSL",
      "uf": "MS",
      "presencaSessoes": 0.9252336448598131
    },
    {
      "nome": "Nilson Pinto",
      "partido": "PSDB",
      "uf": "PA",
      "presencaSessoes": 0.9252336448598131
    },
    {
      "nome": "Cacá Leão",
      "partido": "PP",
      "uf": "BA",
      "presencaSessoes": 0.9252336448598131
    },
    {
      "nome": "Arthur Oliveira Maia",
      "partido": "DEM",
      "uf": "BA",
      "presencaSessoes": 0.9252336448598131
    },
    {
      "nome": "Luiz Carlos",
      "partido": "PSDB",
      "uf": "AP",
      "presencaSessoes": 0.9299065420560748
    },
    {
      "nome": "Bacelar",
      "partido": "PODE",
      "uf": "BA",
      "presencaSessoes": 0.9299065420560748
    },
    {
      "nome": "Major Fabiana",
      "partido": "PSL",
      "uf": "RJ",
      "presencaSessoes": 0.9302325581395349
    },
    {
      "nome": "Silas Câmara",
      "partido": "REPUBLICANOS",
      "uf": "AM",
      "presencaSessoes": 0.9345794392523364
    },
    {
      "nome": "Kim Kataguiri",
      "partido": "DEM",
      "uf": "SP",
      "presencaSessoes": 0.9345794392523364
    },
    {
      "nome": "Ottaci Nascimento",
      "partido": "SOLIDARIEDADE",
      "uf": "RR",
      "presencaSessoes": 0.9345794392523364
    },
    {
      "nome": "Elcione Barbalho",
      "partido": "MDB",
      "uf": "PA",
      "presencaSessoes": 0.9345794392523364
    },
    {
      "nome": "Eduardo da Fonte",
      "partido": "PP",
      "uf": "PE",
      "presencaSessoes": 0.9345794392523364
    },
    {
      "nome": "Juscelino Filho",
      "partido": "DEM",
      "uf": "MA",
      "presencaSessoes": 0.9345794392523364
    },
    {
      "nome": "Patrus Ananias",
      "partido": "PT",
      "uf": "MG",
      "presencaSessoes": 0.9392523364485982
    },
    {
      "nome": "Silvio Costa Filho",
      "partido": "REPUBLICANOS",
      "uf": "PE",
      "presencaSessoes": 0.9392523364485982
    },
    {
      "nome": "Carla Zambelli",
      "partido": "PSL",
      "uf": "SP",
      "presencaSessoes": 0.9392523364485982
    },
    {
      "nome": "Fabio Reis",
      "partido": "MDB",
      "uf": "SE",
      "presencaSessoes": 0.9392523364485982
    },
    {
      "nome": "Ricardo Barros",
      "partido": "PP",
      "uf": "PR",
      "presencaSessoes": 0.9392523364485982
    },
    {
      "nome": "Pastor Sargento Isidório",
      "partido": "AVANTE",
      "uf": "BA",
      "presencaSessoes": 0.9439252336448598
    },
    {
      "nome": "Nereu Crispim",
      "partido": "PSL",
      "uf": "RS",
      "presencaSessoes": 0.9439252336448598
    },
    {
      "nome": "Mauro Lopes",
      "partido": "MDB",
      "uf": "MG",
      "presencaSessoes": 0.9439252336448598
    },
    {
      "nome": "Acácio Favacho",
      "partido": "PROS",
      "uf": "AP",
      "presencaSessoes": 0.9439252336448598
    },
    {
      "nome": "Nivaldo Albuquerque",
      "partido": "PTB",
      "uf": "AL",
      "presencaSessoes": 0.9439252336448598
    },
    {
      "nome": "Filipe Barros",
      "partido": "PSL",
      "uf": "PR",
      "presencaSessoes": 0.9439252336448598
    },
    {
      "nome": "Odorico Monteiro",
      "partido": "PSB",
      "uf": "CE",
      "presencaSessoes": 0.9473684210526315
    },
    {
      "nome": "Eli Corrêa Filho",
      "partido": "DEM",
      "uf": "SP",
      "presencaSessoes": 0.9481865284974094
    },
    {
      "nome": "Paulo Abi-Ackel",
      "partido": "PSDB",
      "uf": "MG",
      "presencaSessoes": 0.9485981308411215
    },
    {
      "nome": "Diego Andrade",
      "partido": "PSD",
      "uf": "MG",
      "presencaSessoes": 0.9485981308411215
    },
    {
      "nome": "Sergio Toledo",
      "partido": "PL",
      "uf": "AL",
      "presencaSessoes": 0.9485981308411215
    },
    {
      "nome": "AJ Albuquerque",
      "partido": "PP",
      "uf": "CE",
      "presencaSessoes": 0.9485981308411215
    },
    {
      "nome": "Igor Timo",
      "partido": "PODE",
      "uf": "MG",
      "presencaSessoes": 0.9485981308411215
    },
    {
      "nome": "Jéssica Sales",
      "partido": "MDB",
      "uf": "AC",
      "presencaSessoes": 0.9485981308411215
    },
    {
      "nome": "Lucio Mosquini",
      "partido": "MDB",
      "uf": "RO",
      "presencaSessoes": 0.9485981308411215
    },
    {
      "nome": "Haroldo Cathedral",
      "partido": "PSD",
      "uf": "RR",
      "presencaSessoes": 0.9485981308411215
    },
    {
      "nome": "Luizianne Lins",
      "partido": "PT",
      "uf": "CE",
      "presencaSessoes": 0.95
    },
    {
      "nome": "Fernando Coelho Filho",
      "partido": "DEM",
      "uf": "PE",
      "presencaSessoes": 0.9532710280373832
    },
    {
      "nome": "Nelson Barbudo",
      "partido": "PSL",
      "uf": "MT",
      "presencaSessoes": 0.9532710280373832
    },
    {
      "nome": "Edio Lopes",
      "partido": "PL",
      "uf": "RR",
      "presencaSessoes": 0.9532710280373832
    },
    {
      "nome": "Fausto Pinato",
      "partido": "PP",
      "uf": "SP",
      "presencaSessoes": 0.9532710280373832
    },
    {
      "nome": "Newton Cardoso Jr",
      "partido": "MDB",
      "uf": "MG",
      "presencaSessoes": 0.9532710280373832
    },
    {
      "nome": "Leda Sadala",
      "partido": "AVANTE",
      "uf": "AP",
      "presencaSessoes": 0.9532710280373832
    },
    {
      "nome": "Lucas Vergilio",
      "partido": "SOLIDARIEDADE",
      "uf": "GO",
      "presencaSessoes": 0.9532710280373832
    },
    {
      "nome": "Ricardo Izar",
      "partido": "PP",
      "uf": "SP",
      "presencaSessoes": 0.9532710280373832
    },
    {
      "nome": "Paulo Freire Costa",
      "partido": "PL",
      "uf": "SP",
      "presencaSessoes": 0.9532710280373832
    },
    {
      "nome": "Iracema Portella",
      "partido": "PP",
      "uf": "PI",
      "presencaSessoes": 0.9532710280373832
    },
    {
      "nome": "Altineu Côrtes",
      "partido": "PL",
      "uf": "RJ",
      "presencaSessoes": 0.9545454545454546
    },
    {
      "nome": "Márcio Biolchi",
      "partido": "MDB",
      "uf": "RS",
      "presencaSessoes": 0.9579439252336449
    },
    {
      "nome": "Clarissa Garotinho",
      "partido": "PROS",
      "uf": "RJ",
      "presencaSessoes": 0.9579439252336449
    },
    {
      "nome": "Raimundo Costa",
      "partido": "PL",
      "uf": "BA",
      "presencaSessoes": 0.9579439252336449
    },
    {
      "nome": "Gilberto Abramo",
      "partido": "REPUBLICANOS",
      "uf": "MG",
      "presencaSessoes": 0.9579439252336449
    },
    {
      "nome": "Vinicius Farah",
      "partido": "MDB",
      "uf": "RJ",
      "presencaSessoes": 0.9579439252336449
    },
    {
      "nome": "Luisa Canziani",
      "partido": "PTB",
      "uf": "PR",
      "presencaSessoes": 0.9579439252336449
    },
    {
      "nome": "Hugo Motta",
      "partido": "REPUBLICANOS",
      "uf": "PB",
      "presencaSessoes": 0.9579439252336449
    },
    {
      "nome": "Marcon",
      "partido": "PT",
      "uf": "RS",
      "presencaSessoes": 0.9579439252336449
    },
    {
      "nome": "Dr. Frederico",
      "partido": "PATRIOTA",
      "uf": "MG",
      "presencaSessoes": 0.9579439252336449
    },
    {
      "nome": "Professora Dorinha Seabra Rezende",
      "partido": "DEM",
      "uf": "TO",
      "presencaSessoes": 0.9579439252336449
    },
    {
      "nome": "Shéridan",
      "partido": "PSDB",
      "uf": "RR",
      "presencaSessoes": 0.9579439252336449
    },
    {
      "nome": "Flaviano Melo",
      "partido": "MDB",
      "uf": "AC",
      "presencaSessoes": 0.9579439252336449
    },
    {
      "nome": "Jefferson Campos",
      "partido": "PSB",
      "uf": "SP",
      "presencaSessoes": 0.9585492227979274
    },
    {
      "nome": "David Miranda",
      "partido": "PSOL",
      "uf": "RJ",
      "presencaSessoes": 0.9626168224299065
    },
    {
      "nome": "Ronaldo Carletto",
      "partido": "PP",
      "uf": "BA",
      "presencaSessoes": 0.9626168224299065
    },
    {
      "nome": "Herculano Passos",
      "partido": "MDB",
      "uf": "SP",
      "presencaSessoes": 0.9626168224299065
    },
    {
      "nome": "Charlles Evangelista",
      "partido": "PSL",
      "uf": "MG",
      "presencaSessoes": 0.9626168224299065
    },
    {
      "nome": "Marília Arraes",
      "partido": "PT",
      "uf": "PE",
      "presencaSessoes": 0.9626168224299065
    },
    {
      "nome": "Damião Feliciano",
      "partido": "PDT",
      "uf": "PB",
      "presencaSessoes": 0.9626168224299065
    },
    {
      "nome": "Delegado Éder Mauro",
      "partido": "PSD",
      "uf": "PA",
      "presencaSessoes": 0.9626168224299065
    },
    {
      "nome": "Flávia Morais",
      "partido": "PDT",
      "uf": "GO",
      "presencaSessoes": 0.9626168224299065
    },
    {
      "nome": "Pedro Lupion",
      "partido": "DEM",
      "uf": "PR",
      "presencaSessoes": 0.9626168224299065
    },
    {
      "nome": "Carlos Henrique Gaguim",
      "partido": "DEM",
      "uf": "TO",
      "presencaSessoes": 0.9626168224299065
    },
    {
      "nome": "Aelton Freitas",
      "partido": "PL",
      "uf": "MG",
      "presencaSessoes": 0.9666666666666667
    },
    {
      "nome": "Capitão Wagner",
      "partido": "PROS",
      "uf": "CE",
      "presencaSessoes": 0.9672897196261683
    },
    {
      "nome": "Adolfo Viana",
      "partido": "PSDB",
      "uf": "BA",
      "presencaSessoes": 0.9672897196261683
    },
    {
      "nome": "Marx Beltrão",
      "partido": "PSD",
      "uf": "AL",
      "presencaSessoes": 0.9672897196261683
    },
    {
      "nome": "Arnaldo Jardim",
      "partido": "CIDADANIA",
      "uf": "SP",
      "presencaSessoes": 0.9672897196261683
    },
    {
      "nome": "Eros Biondini",
      "partido": "PROS",
      "uf": "MG",
      "presencaSessoes": 0.9672897196261683
    },
    {
      "nome": "Dr. Jaziel",
      "partido": "PL",
      "uf": "CE",
      "presencaSessoes": 0.9672897196261683
    },
    {
      "nome": "Marcelo Nilo",
      "partido": "PSB",
      "uf": "BA",
      "presencaSessoes": 0.9672897196261683
    },
    {
      "nome": "Wolney Queiroz",
      "partido": "PDT",
      "uf": "PE",
      "presencaSessoes": 0.9672897196261683
    },
    {
      "nome": "Gil Cutrim",
      "partido": "REPUBLICANOS",
      "uf": "MA",
      "presencaSessoes": 0.9672897196261683
    },
    {
      "nome": "Otoni de Paula",
      "partido": "PSC",
      "uf": "RJ",
      "presencaSessoes": 0.9672897196261683
    },
    {
      "nome": "Bruna Furlan",
      "partido": "PSDB",
      "uf": "SP",
      "presencaSessoes": 0.9672897196261683
    },
    {
      "nome": "Fábio Mitidieri",
      "partido": "PSD",
      "uf": "SE",
      "presencaSessoes": 0.9672897196261683
    },
    {
      "nome": "Fernando Monteiro",
      "partido": "PP",
      "uf": "PE",
      "presencaSessoes": 0.9672897196261683
    },
    {
      "nome": "Júnior Mano",
      "partido": "PL",
      "uf": "CE",
      "presencaSessoes": 0.9672897196261683
    },
    {
      "nome": "Coronel Tadeu",
      "partido": "PSL",
      "uf": "SP",
      "presencaSessoes": 0.9672897196261683
    },
    {
      "nome": "Aureo Ribeiro",
      "partido": "SOLIDARIEDADE",
      "uf": "RJ",
      "presencaSessoes": 0.9672897196261683
    },
    {
      "nome": "João Carlos Bacelar",
      "partido": "PL",
      "uf": "BA",
      "presencaSessoes": 0.9719626168224299
    },
    {
      "nome": "Átila Lira",
      "partido": "PP",
      "uf": "PI",
      "presencaSessoes": 0.9719626168224299
    },
    {
      "nome": "Policial Katia Sastre",
      "partido": "PL",
      "uf": "SP",
      "presencaSessoes": 0.9719626168224299
    },
    {
      "nome": "Renildo Calheiros",
      "partido": "PCdoB",
      "uf": "PE",
      "presencaSessoes": 0.9719626168224299
    },
    {
      "nome": "Dr. Luiz Antonio Teixeira Jr.",
      "partido": "PP",
      "uf": "RJ",
      "presencaSessoes": 0.9719626168224299
    },
    {
      "nome": "Bozzella",
      "partido": "PSL",
      "uf": "SP",
      "presencaSessoes": 0.9719626168224299
    },
    {
      "nome": "Marlon Santos",
      "partido": "PDT",
      "uf": "RS",
      "presencaSessoes": 0.9719626168224299
    },
    {
      "nome": "Carlos Jordy",
      "partido": "PSL",
      "uf": "RJ",
      "presencaSessoes": 0.9719626168224299
    },
    {
      "nome": "Stefano Aguiar",
      "partido": "PSD",
      "uf": "MG",
      "presencaSessoes": 0.9719626168224299
    },
    {
      "nome": "Márcio Marinho",
      "partido": "REPUBLICANOS",
      "uf": "BA",
      "presencaSessoes": 0.9719626168224299
    },
    {
      "nome": "Sóstenes Cavalcante",
      "partido": "DEM",
      "uf": "RJ",
      "presencaSessoes": 0.9719626168224299
    },
    {
      "nome": "Airton Faleiro",
      "partido": "PT",
      "uf": "PA",
      "presencaSessoes": 0.9719626168224299
    },
    {
      "nome": "João Campos",
      "partido": "REPUBLICANOS",
      "uf": "GO",
      "presencaSessoes": 0.9719626168224299
    },
    {
      "nome": "Rubens Otoni",
      "partido": "PT",
      "uf": "GO",
      "presencaSessoes": 0.9719626168224299
    },
    {
      "nome": "Reginaldo Lopes",
      "partido": "PT",
      "uf": "MG",
      "presencaSessoes": 0.9719626168224299
    },
    {
      "nome": "Ricardo Teobaldo",
      "partido": "PODE",
      "uf": "PE",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "Julian Lemos",
      "partido": "PSL",
      "uf": "PB",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "Fernanda Melchionna",
      "partido": "PSOL",
      "uf": "RS",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "Celina Leão",
      "partido": "PP",
      "uf": "DF",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "Neri Geller",
      "partido": "PP",
      "uf": "MT",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "Abou Anni",
      "partido": "PSL",
      "uf": "SP",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "Professor Israel Batista",
      "partido": "PV",
      "uf": "DF",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "Geninho Zuliani",
      "partido": "DEM",
      "uf": "SP",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "Silvia Cristina",
      "partido": "PDT",
      "uf": "RO",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "Pedro Uczai",
      "partido": "PT",
      "uf": "SC",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "Helio Lopes",
      "partido": "PSL",
      "uf": "RJ",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "Sergio Souza",
      "partido": "MDB",
      "uf": "PR",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "José Rocha",
      "partido": "PL",
      "uf": "BA",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "David Soares",
      "partido": "DEM",
      "uf": "SP",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "Danilo Cabral",
      "partido": "PSB",
      "uf": "PE",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "Vavá Martins",
      "partido": "REPUBLICANOS",
      "uf": "PA",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "Afonso Florence",
      "partido": "PT",
      "uf": "BA",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "Chico D'Angelo",
      "partido": "PDT",
      "uf": "RJ",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "Rui Falcão",
      "partido": "PT",
      "uf": "SP",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "Coronel Armando",
      "partido": "PSL",
      "uf": "SC",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "Paula Belmonte",
      "partido": "CIDADANIA",
      "uf": "DF",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "Jorge Solla",
      "partido": "PT",
      "uf": "BA",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "Eduardo Bolsonaro",
      "partido": "PSL",
      "uf": "SP",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "Cezinha de Madureira",
      "partido": "PSD",
      "uf": "SP",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "Zé Neto",
      "partido": "PT",
      "uf": "BA",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "Pompeo de Mattos",
      "partido": "PDT",
      "uf": "RS",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "Beto Rosado",
      "partido": "PP",
      "uf": "RN",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "Jhonatan de Jesus",
      "partido": "REPUBLICANOS",
      "uf": "RR",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "Dr. Luiz Ovando",
      "partido": "PSL",
      "uf": "MS",
      "presencaSessoes": 0.9766355140186916
    },
    {
      "nome": "Aníbal Gomes",
      "partido": "DEM",
      "uf": "CE",
      "presencaSessoes": 0.9789473684210527
    },
    {
      "nome": "Claudio Cajado",
      "partido": "PP",
      "uf": "BA",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Daniel Freitas",
      "partido": "PSL",
      "uf": "SC",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Benedita da Silva",
      "partido": "PT",
      "uf": "RJ",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "André Abdon",
      "partido": "PP",
      "uf": "AP",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Gustinho Ribeiro",
      "partido": "SOLIDARIEDADE",
      "uf": "SE",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Marcos Aurélio Sampaio",
      "partido": "MDB",
      "uf": "PI",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Margarete Coelho",
      "partido": "PP",
      "uf": "PI",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Valdevan Noventa",
      "partido": "PL",
      "uf": "SE",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Joenia Wapichana",
      "partido": "REDE",
      "uf": "RR",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Gervásio Maia",
      "partido": "PSB",
      "uf": "PB",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Gutemberg Reis",
      "partido": "MDB",
      "uf": "RJ",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Hiran Gonçalves",
      "partido": "PP",
      "uf": "RR",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Beto Faro",
      "partido": "PT",
      "uf": "PA",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Benes Leocádio",
      "partido": "REPUBLICANOS",
      "uf": "RN",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Pedro Westphalen",
      "partido": "PP",
      "uf": "RS",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Mara Rocha",
      "partido": "PSDB",
      "uf": "AC",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Alexis Fonteyne",
      "partido": "NOVO",
      "uf": "SP",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Sâmia Bomfim",
      "partido": "PSOL",
      "uf": "SP",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Vander Loubet",
      "partido": "PT",
      "uf": "MS",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Leonardo Monteiro",
      "partido": "PT",
      "uf": "MG",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Rodrigo de Castro",
      "partido": "PSDB",
      "uf": "MG",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Paulo Azi",
      "partido": "DEM",
      "uf": "BA",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Eli Borges",
      "partido": "SOLIDARIEDADE",
      "uf": "TO",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Orlando Silva",
      "partido": "PCdoB",
      "uf": "SP",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Pastor Eurico",
      "partido": "PATRIOTA",
      "uf": "PE",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Zé Silva",
      "partido": "SOLIDARIEDADE",
      "uf": "MG",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Celso Russomanno",
      "partido": "REPUBLICANOS",
      "uf": "SP",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Átila Lins",
      "partido": "PP",
      "uf": "AM",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Euclydes Pettersen",
      "partido": "PSC",
      "uf": "MG",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Marcelo Freixo",
      "partido": "PSOL",
      "uf": "RJ",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Vermelho",
      "partido": "PSD",
      "uf": "PR",
      "presencaSessoes": 0.9813084112149533
    },
    {
      "nome": "Dr. Gonçalo",
      "partido": "REPUBLICANOS",
      "uf": "MA",
      "presencaSessoes": 0.9827586206896551
    },
    {
      "nome": "Capitão Fábio Abreu",
      "partido": "PL",
      "uf": "PI",
      "presencaSessoes": 0.9833333333333333
    },
    {
      "nome": "Joseildo Ramos",
      "partido": "PT",
      "uf": "BA",
      "presencaSessoes": 0.9846153846153847
    },
    {
      "nome": "Valtenir Pereira",
      "partido": "MDB",
      "uf": "MT",
      "presencaSessoes": 0.9852941176470589
    },
    {
      "nome": "Paulo Guedes",
      "partido": "PT",
      "uf": "MG",
      "presencaSessoes": 0.985981308411215
    },
    {
      "nome": "Padre João",
      "partido": "PT",
      "uf": "MG",
      "presencaSessoes": 0.985981308411215
    },
    {
      "nome": "Leur Lomanto Júnior",
      "partido": "DEM",
      "uf": "BA",
      "presencaSessoes": 0.985981308411215
    },
    {
      "nome": "Hélio Leite",
      "partido": "DEM",
      "uf": "PA",
      "presencaSessoes": 0.985981308411215
    },
    {
      "nome": "Da Vitoria",
      "partido": "CIDADANIA",
      "uf": "ES",
      "presencaSessoes": 0.985981308411215
    },
    {
      "nome": "Antonio Brito",
      "partido": "PSD",
      "uf": "BA",
      "presencaSessoes": 0.985981308411215
    },
    {
      "nome": "Tabata Amaral",
      "partido": "PDT",
      "uf": "SP",
      "presencaSessoes": 0.985981308411215
    },
    {
      "nome": "Olival Marques",
      "partido": "DEM",
      "uf": "PA",
      "presencaSessoes": 0.985981308411215
    },
    {
      "nome": "Lídice da Mata",
      "partido": "PSB",
      "uf": "BA",
      "presencaSessoes": 0.985981308411215
    },
    {
      "nome": "Celso Maldaner",
      "partido": "MDB",
      "uf": "SC",
      "presencaSessoes": 0.985981308411215
    },
    {
      "nome": "Hildo Rocha",
      "partido": "MDB",
      "uf": "MA",
      "presencaSessoes": 0.985981308411215
    },
    {
      "nome": "Maria Rosas",
      "partido": "REPUBLICANOS",
      "uf": "SP",
      "presencaSessoes": 0.985981308411215
    },
    {
      "nome": "Luiz Carlos Motta",
      "partido": "PL",
      "uf": "SP",
      "presencaSessoes": 0.985981308411215
    },
    {
      "nome": "General Peternelli",
      "partido": "PSL",
      "uf": "SP",
      "presencaSessoes": 0.985981308411215
    },
    {
      "nome": "Expedito Netto",
      "partido": "PSD",
      "uf": "RO",
      "presencaSessoes": 0.985981308411215
    },
    {
      "nome": "Perpétua Almeida",
      "partido": "PCdoB",
      "uf": "AC",
      "presencaSessoes": 0.985981308411215
    },
    {
      "nome": "Frei Anastacio Ribeiro",
      "partido": "PT",
      "uf": "PB",
      "presencaSessoes": 0.985981308411215
    },
    {
      "nome": "Felipe Rigoni",
      "partido": "PSB",
      "uf": "ES",
      "presencaSessoes": 0.985981308411215
    },
    {
      "nome": "Gelson Azevedo",
      "partido": "PL",
      "uf": "RJ",
      "presencaSessoes": 0.985981308411215
    },
    {
      "nome": "Cássio Andrade",
      "partido": "PSB",
      "uf": "PA",
      "presencaSessoes": 0.985981308411215
    },
    {
      "nome": "Felipe Francischini",
      "partido": "PSL",
      "uf": "PR",
      "presencaSessoes": 0.985981308411215
    },
    {
      "nome": "Heitor Schuch",
      "partido": "PSB",
      "uf": "RS",
      "presencaSessoes": 0.985981308411215
    },
    {
      "nome": "Beto Pereira",
      "partido": "PSDB",
      "uf": "MS",
      "presencaSessoes": 0.985981308411215
    },
    {
      "nome": "Alex Santana",
      "partido": "PDT",
      "uf": "BA",
      "presencaSessoes": 0.985981308411215
    },
    {
      "nome": "Gastão Vieira",
      "partido": "PROS",
      "uf": "MA",
      "presencaSessoes": 0.9898477157360406
    },
    {
      "nome": "Roman",
      "partido": "PATRIOTA",
      "uf": "PR",
      "presencaSessoes": 0.9905660377358491
    },
    {
      "nome": "José Medeiros",
      "partido": "PODE",
      "uf": "MT",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Mariana Carvalho",
      "partido": "PSDB",
      "uf": "RO",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Túlio Gadêlha",
      "partido": "PDT",
      "uf": "PE",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Christino Aureo",
      "partido": "PP",
      "uf": "RJ",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Daniel Coelho",
      "partido": "CIDADANIA",
      "uf": "PE",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Alencar Santana Braga",
      "partido": "PT",
      "uf": "SP",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Evair Vieira de Melo",
      "partido": "PP",
      "uf": "ES",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Tiago Dimas",
      "partido": "SOLIDARIEDADE",
      "uf": "TO",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Emanuel Pinheiro Neto",
      "partido": "PTB",
      "uf": "MT",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Luiz Antônio Corrêa",
      "partido": "PL",
      "uf": "RJ",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Leandre",
      "partido": "PV",
      "uf": "PR",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Rodrigo Coelho",
      "partido": "PSB",
      "uf": "SC",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Rogério Correia",
      "partido": "PT",
      "uf": "MG",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Daniel Silveira",
      "partido": "PSL",
      "uf": "RJ",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Alexandre Leite",
      "partido": "DEM",
      "uf": "SP",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Luiz Philippe de Orleans e Bragança",
      "partido": "PSL",
      "uf": "SP",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Gonzaga Patriota",
      "partido": "PSB",
      "uf": "PE",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Alceu Moreira",
      "partido": "MDB",
      "uf": "RS",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Dra. Vanda Milani",
      "partido": "SOLIDARIEDADE",
      "uf": "AC",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Jose Mario Schreiner",
      "partido": "DEM",
      "uf": "GO",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Aguinaldo Ribeiro",
      "partido": "PP",
      "uf": "PB",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Alex Manente",
      "partido": "CIDADANIA",
      "uf": "SP",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Domingos Sávio",
      "partido": "PSDB",
      "uf": "MG",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Lauriete",
      "partido": "PSC",
      "uf": "ES",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Domingos Neto",
      "partido": "PSD",
      "uf": "CE",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Chiquinho Brazão",
      "partido": "AVANTE",
      "uf": "RJ",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Alexandre Frota",
      "partido": "PSDB",
      "uf": "SP",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Milton Vieira",
      "partido": "REPUBLICANOS",
      "uf": "SP",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Joice Hasselmann",
      "partido": "PSL",
      "uf": "SP",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Pedro Augusto Bezerra",
      "partido": "PTB",
      "uf": "CE",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Roberto Alves",
      "partido": "REPUBLICANOS",
      "uf": "SP",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Vinicius Carvalho",
      "partido": "REPUBLICANOS",
      "uf": "SP",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Paulo Teixeira",
      "partido": "PT",
      "uf": "SP",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Alice Portugal",
      "partido": "PCdoB",
      "uf": "BA",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Hugo Leal",
      "partido": "PSD",
      "uf": "RJ",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Fábio Ramalho",
      "partido": "MDB",
      "uf": "MG",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Elmar Nascimento",
      "partido": "DEM",
      "uf": "BA",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "João Marcelo Souza",
      "partido": "MDB",
      "uf": "MA",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Bosco Costa",
      "partido": "PL",
      "uf": "SE",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Edilázio Júnior",
      "partido": "PSD",
      "uf": "MA",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Hermes Parcianello",
      "partido": "MDB",
      "uf": "PR",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Eduardo Costa",
      "partido": "PTB",
      "uf": "PA",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Júlio Cesar",
      "partido": "PSD",
      "uf": "PI",
      "presencaSessoes": 0.9906542056074766
    },
    {
      "nome": "Ted Conti",
      "partido": "PSB",
      "uf": "ES",
      "presencaSessoes": 0.9952830188679245
    },
    {
      "nome": "Pr. Marco Feliciano",
      "partido": "REPUBLICANOS",
      "uf": "SP",
      "presencaSessoes": 0.9952830188679245
    },
    {
      "nome": "Zé Vitor",
      "partido": "PL",
      "uf": "MG",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Luiz Nishimori",
      "partido": "PL",
      "uf": "PR",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Vilson da Fetaemg",
      "partido": "PSB",
      "uf": "MG",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Lucas Gonzalez",
      "partido": "NOVO",
      "uf": "MG",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Tiririca",
      "partido": "PL",
      "uf": "SP",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Vitor Lippi",
      "partido": "PSDB",
      "uf": "SP",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Rafael Motta",
      "partido": "PSB",
      "uf": "RN",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Célio Moura",
      "partido": "PT",
      "uf": "TO",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Enio Verri",
      "partido": "PT",
      "uf": "PR",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Alcides Rodrigues",
      "partido": "PATRIOTA",
      "uf": "GO",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Tereza Nelma",
      "partido": "PSDB",
      "uf": "AL",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Aroldo Martins",
      "partido": "REPUBLICANOS",
      "uf": "PR",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Diego Garcia",
      "partido": "PODE",
      "uf": "PR",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Professora Rosa Neide",
      "partido": "PT",
      "uf": "MT",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Giovani Cherini",
      "partido": "PL",
      "uf": "RS",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Jesus Sérgio",
      "partido": "PDT",
      "uf": "AC",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Aliel Machado",
      "partido": "PSB",
      "uf": "PR",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Jaqueline Cassol",
      "partido": "PP",
      "uf": "RO",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Enrico Misasi",
      "partido": "PV",
      "uf": "SP",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "General Girão",
      "partido": "PSL",
      "uf": "RN",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Tadeu Alencar",
      "partido": "PSB",
      "uf": "PE",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Sanderson",
      "partido": "PSL",
      "uf": "RS",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Dimas Fabiano",
      "partido": "PP",
      "uf": "MG",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Marcelo Moraes",
      "partido": "PTB",
      "uf": "RS",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Eduardo Bismarck",
      "partido": "PDT",
      "uf": "CE",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Camilo Capiberibe",
      "partido": "PSB",
      "uf": "AP",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Coronel Chrisóstomo",
      "partido": "PSL",
      "uf": "RO",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Célio Studart",
      "partido": "PV",
      "uf": "CE",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Alexandre Padilha",
      "partido": "PT",
      "uf": "SP",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Alê Silva",
      "partido": "PSL",
      "uf": "MG",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Edna Henrique",
      "partido": "PSDB",
      "uf": "PB",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Eduardo Cury",
      "partido": "PSDB",
      "uf": "SP",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Amaro Neto",
      "partido": "REPUBLICANOS",
      "uf": "ES",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Léo Motta",
      "partido": "PSL",
      "uf": "MG",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Professor Joziel",
      "partido": "PSL",
      "uf": "RJ",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Elias Vaz",
      "partido": "PSB",
      "uf": "GO",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Paulo Ramos",
      "partido": "PDT",
      "uf": "RJ",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Vanderlei Macris",
      "partido": "PSDB",
      "uf": "SP",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Nicoletti",
      "partido": "PSL",
      "uf": "RR",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Raul Henry",
      "partido": "MDB",
      "uf": "PE",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Flordelis",
      "partido": "PSD",
      "uf": "RJ",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Mauro Nazif",
      "partido": "PSB",
      "uf": "RO",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "José Airton Félix Cirilo",
      "partido": "PT",
      "uf": "CE",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Francisco Jr.",
      "partido": "PSD",
      "uf": "GO",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Daniel Almeida",
      "partido": "PCdoB",
      "uf": "BA",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Afonso Motta",
      "partido": "PDT",
      "uf": "RS",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Zeca Dirceu",
      "partido": "PT",
      "uf": "PR",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Valmir Assunção",
      "partido": "PT",
      "uf": "BA",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Waldenor Pereira",
      "partido": "PT",
      "uf": "BA",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Efraim Filho",
      "partido": "DEM",
      "uf": "PB",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "José Nunes",
      "partido": "PSD",
      "uf": "BA",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Celso Sabino",
      "partido": "PSDB",
      "uf": "PA",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Mário Heringer",
      "partido": "PDT",
      "uf": "MG",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Odair Cunha",
      "partido": "PT",
      "uf": "MG",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Uldurico Junior",
      "partido": "PROS",
      "uf": "BA",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Gilberto Nascimento",
      "partido": "PSC",
      "uf": "SP",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Marina Santos",
      "partido": "SOLIDARIEDADE",
      "uf": "PI",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Vicentinho",
      "partido": "PT",
      "uf": "SP",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Zé Carlos",
      "partido": "PT",
      "uf": "MA",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Delegado Marcelo Freitas",
      "partido": "PSL",
      "uf": "MG",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Maria do Rosário",
      "partido": "PT",
      "uf": "RS",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Bira do Pindaré",
      "partido": "PSB",
      "uf": "MA",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Carlos Gomes",
      "partido": "REPUBLICANOS",
      "uf": "RS",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Júlio Delgado",
      "partido": "PSB",
      "uf": "MG",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Marreca Filho",
      "partido": "PATRIOTA",
      "uf": "MA",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Henrique Fontana",
      "partido": "PT",
      "uf": "RS",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Capitão Alberto Neto",
      "partido": "REPUBLICANOS",
      "uf": "AM",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Tito",
      "partido": "AVANTE",
      "uf": "BA",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Charles Fernandes",
      "partido": "PSD",
      "uf": "BA",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Wellington Roberto",
      "partido": "PL",
      "uf": "PB",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Carlos Veras",
      "partido": "PT",
      "uf": "PE",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Subtenente Gonzaga",
      "partido": "PDT",
      "uf": "MG",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Giovani Feltes",
      "partido": "MDB",
      "uf": "RS",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Leônidas Cristino",
      "partido": "PDT",
      "uf": "CE",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Paulão",
      "partido": "PT",
      "uf": "AL",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Ivan Valente",
      "partido": "PSOL",
      "uf": "SP",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Caroline de Toni",
      "partido": "PSL",
      "uf": "SC",
      "presencaSessoes": 0.9953271028037384
    },
    {
      "nome": "Hélio Costa",
      "partido": "REPUBLICANOS",
      "uf": "SC",
      "presencaSessoes": 1
    },
    {
      "nome": "Juninho do Pneu",
      "partido": "DEM",
      "uf": "RJ",
      "presencaSessoes": 1
    },
    {
      "nome": "Roberto de Lucena",
      "partido": "PODE",
      "uf": "SP",
      "presencaSessoes": 1
    },
    {
      "nome": "Daniela do Waguinho",
      "partido": "MDB",
      "uf": "RJ",
      "presencaSessoes": 1
    },
    {
      "nome": "Nilto Tatto",
      "partido": "PT",
      "uf": "SP",
      "presencaSessoes": 1
    },
    {
      "nome": "Marco Bertaiolli",
      "partido": "PSD",
      "uf": "SP",
      "presencaSessoes": 1
    },
    {
      "nome": "Soraya Santos",
      "partido": "PL",
      "uf": "RJ",
      "presencaSessoes": 1
    },
    {
      "nome": "Rosangela Gomes",
      "partido": "REPUBLICANOS",
      "uf": "RJ",
      "presencaSessoes": 1
    },
    {
      "nome": "Paulo Ganime",
      "partido": "NOVO",
      "uf": "RJ",
      "presencaSessoes": 1
    },
    {
      "nome": "Chris Tonietto",
      "partido": "PSL",
      "uf": "RJ",
      "presencaSessoes": 1
    },
    {
      "nome": "Pinheirinho",
      "partido": "PP",
      "uf": "MG",
      "presencaSessoes": 1
    },
    {
      "nome": "Rosana Valle",
      "partido": "PSB",
      "uf": "SP",
      "presencaSessoes": 1
    },
    {
      "nome": "Talíria Petrone",
      "partido": "PSOL",
      "uf": "RJ",
      "presencaSessoes": 1
    },
    {
      "nome": "Dr. Zacharias Calil",
      "partido": "DEM",
      "uf": "GO",
      "presencaSessoes": 1
    },
    {
      "nome": "Toninho Wandscheer",
      "partido": "PROS",
      "uf": "PR",
      "presencaSessoes": 1
    },
    {
      "nome": "Vaidon Oliveira",
      "partido": "PROS",
      "uf": "CE",
      "presencaSessoes": 1
    },
    {
      "nome": "Rogério Peninha Mendonça",
      "partido": "MDB",
      "uf": "SC",
      "presencaSessoes": 1
    },
    {
      "nome": "Boca Aberta",
      "partido": "PROS",
      "uf": "PR",
      "presencaSessoes": 1
    },
    {
      "nome": "Adriana Ventura",
      "partido": "NOVO",
      "uf": "SP",
      "presencaSessoes": 1
    },
    {
      "nome": "Miguel Lombardi",
      "partido": "PL",
      "uf": "SP",
      "presencaSessoes": 1
    },
    {
      "nome": "Aline Sleutjes",
      "partido": "PSL",
      "uf": "PR",
      "presencaSessoes": 1
    },
    {
      "nome": "Gleisi Hoffmann",
      "partido": "PT",
      "uf": "PR",
      "presencaSessoes": 1
    },
    {
      "nome": "Julio Cesar Ribeiro",
      "partido": "REPUBLICANOS",
      "uf": "DF",
      "presencaSessoes": 1
    },
    {
      "nome": "Bohn Gass",
      "partido": "PT",
      "uf": "RS",
      "presencaSessoes": 1
    },
    {
      "nome": "Marcio Alvino",
      "partido": "PL",
      "uf": "SP",
      "presencaSessoes": 1
    },
    {
      "nome": "Christiane de Souza Yared",
      "partido": "PL",
      "uf": "PR",
      "presencaSessoes": 1
    },
    {
      "nome": "Rodrigo Agostinho",
      "partido": "PSB",
      "uf": "SP",
      "presencaSessoes": 1
    },
    {
      "nome": "Paulo Eduardo Martins",
      "partido": "PSC",
      "uf": "PR",
      "presencaSessoes": 1
    },
    {
      "nome": "Guilherme Derrite",
      "partido": "PP",
      "uf": "SP",
      "presencaSessoes": 1
    },
    {
      "nome": "Gurgel",
      "partido": "PSL",
      "uf": "RJ",
      "presencaSessoes": 1
    },
    {
      "nome": "Cristiano Vale",
      "partido": "PL",
      "uf": "PA",
      "presencaSessoes": 1
    },
    {
      "nome": "Vinicius Poit",
      "partido": "NOVO",
      "uf": "SP",
      "presencaSessoes": 1
    },
    {
      "nome": "Jerônimo Goergen",
      "partido": "PP",
      "uf": "RS",
      "presencaSessoes": 1
    },
    {
      "nome": "Idilvan Alencar",
      "partido": "PDT",
      "uf": "CE",
      "presencaSessoes": 1
    },
    {
      "nome": "Bia Kicis",
      "partido": "PSL",
      "uf": "DF",
      "presencaSessoes": 1
    },
    {
      "nome": "Alessandro Molon",
      "partido": "PSB",
      "uf": "RJ",
      "presencaSessoes": 1
    },
    {
      "nome": "Rejane Dias",
      "partido": "PT",
      "uf": "PI",
      "presencaSessoes": 1
    },
    {
      "nome": "Augusto Coutinho",
      "partido": "SOLIDARIEDADE",
      "uf": "PE",
      "presencaSessoes": 1
    },
    {
      "nome": "Sargento Fahur",
      "partido": "PSD",
      "uf": "PR",
      "presencaSessoes": 1
    },
    {
      "nome": "Fábio Trad",
      "partido": "PSD",
      "uf": "MS",
      "presencaSessoes": 1
    },
    {
      "nome": "Fábio Henrique",
      "partido": "PDT",
      "uf": "SE",
      "presencaSessoes": 1
    },
    {
      "nome": "Léo Moraes",
      "partido": "PODE",
      "uf": "RO",
      "presencaSessoes": 1
    },
    {
      "nome": "Luis Tibé",
      "partido": "AVANTE",
      "uf": "MG",
      "presencaSessoes": 1
    },
    {
      "nome": "Dulce Miranda",
      "partido": "MDB",
      "uf": "TO",
      "presencaSessoes": 1
    },
    {
      "nome": "Flávio Nogueira",
      "partido": "PDT",
      "uf": "PI",
      "presencaSessoes": 1
    },
    {
      "nome": "Paulo Bengtson",
      "partido": "PTB",
      "uf": "PA",
      "presencaSessoes": 1
    },
    {
      "nome": "Professor Alcides",
      "partido": "PP",
      "uf": "GO",
      "presencaSessoes": 1
    },
    {
      "nome": "Juarez Costa",
      "partido": "MDB",
      "uf": "MT",
      "presencaSessoes": 1
    },
    {
      "nome": "Weliton Prado",
      "partido": "PROS",
      "uf": "MG",
      "presencaSessoes": 1
    },
    {
      "nome": "Lucas Redecker",
      "partido": "PSDB",
      "uf": "RS",
      "presencaSessoes": 1
    },
    {
      "nome": "Adriano do Baldy",
      "partido": "PP",
      "uf": "GO",
      "presencaSessoes": 1
    },
    {
      "nome": "Luizão Goulart",
      "partido": "REPUBLICANOS",
      "uf": "PR",
      "presencaSessoes": 1
    },
    {
      "nome": "Liziane Bayer",
      "partido": "PSB",
      "uf": "RS",
      "presencaSessoes": 1
    },
    {
      "nome": "Glaustin da Fokus",
      "partido": "PSC",
      "uf": "GO",
      "presencaSessoes": 1
    },
    {
      "nome": "Joaquim Passarinho",
      "partido": "PSD",
      "uf": "PA",
      "presencaSessoes": 1
    },
    {
      "nome": "Marcel van Hattem",
      "partido": "NOVO",
      "uf": "RS",
      "presencaSessoes": 1
    },
    {
      "nome": "Erika Kokay",
      "partido": "PT",
      "uf": "DF",
      "presencaSessoes": 1
    },
    {
      "nome": "Misael Varella",
      "partido": "PSD",
      "uf": "MG",
      "presencaSessoes": 1
    },
    {
      "nome": "Carlos Chiodini",
      "partido": "MDB",
      "uf": "SC",
      "presencaSessoes": 1
    },
    {
      "nome": "Professora Marcivania",
      "partido": "PCdoB",
      "uf": "AP",
      "presencaSessoes": 1
    },
    {
      "nome": "Ricardo Guidi",
      "partido": "PSD",
      "uf": "SC",
      "presencaSessoes": 1
    },
    {
      "nome": "Darci de Matos",
      "partido": "PSD",
      "uf": "SC",
      "presencaSessoes": 1
    },
    {
      "nome": "Célio Silveira",
      "partido": "PSDB",
      "uf": "GO",
      "presencaSessoes": 1
    },
    {
      "nome": "Arthur Lira",
      "partido": "PP",
      "uf": "AL",
      "presencaSessoes": 1
    },
    {
      "nome": "José Nelto",
      "partido": "PODE",
      "uf": "GO",
      "presencaSessoes": 1
    },
    {
      "nome": "Dra. Soraya Manato",
      "partido": "PSL",
      "uf": "ES",
      "presencaSessoes": 1
    },
    {
      "nome": "Helder Salomão",
      "partido": "PT",
      "uf": "ES",
      "presencaSessoes": 1
    },
    {
      "nome": "Lourival Gomes",
      "partido": "PSL",
      "uf": "RJ",
      "presencaSessoes": 1
    },
    {
      "nome": "Baleia Rossi",
      "partido": "MDB",
      "uf": "SP",
      "presencaSessoes": 1
    },
    {
      "nome": "Osires Damaso",
      "partido": "PSC",
      "uf": "TO",
      "presencaSessoes": 1
    },
    {
      "nome": "Luis Miranda",
      "partido": "DEM",
      "uf": "DF",
      "presencaSessoes": 1
    },
    {
      "nome": "Felício Laterça",
      "partido": "PSL",
      "uf": "RJ",
      "presencaSessoes": 1
    },
    {
      "nome": "Glauber Braga",
      "partido": "PSOL",
      "uf": "RJ",
      "presencaSessoes": 1
    },
    {
      "nome": "Heitor Freire",
      "partido": "PSL",
      "uf": "CE",
      "presencaSessoes": 1
    },
    {
      "nome": "Alan Rick",
      "partido": "DEM",
      "uf": "AC",
      "presencaSessoes": 1
    },
    {
      "nome": "Carlos Zarattini",
      "partido": "PT",
      "uf": "SP",
      "presencaSessoes": 1
    },
    {
      "nome": "Bibo Nunes",
      "partido": "PSL",
      "uf": "RS",
      "presencaSessoes": 1
    },
    {
      "nome": "Luciano Bivar",
      "partido": "PSL",
      "uf": "PE",
      "presencaSessoes": 1
    },
    {
      "nome": "João Daniel",
      "partido": "PT",
      "uf": "SE",
      "presencaSessoes": 1
    },
    {
      "nome": "Greyce Elias",
      "partido": "AVANTE",
      "uf": "MG",
      "presencaSessoes": 1
    },
    {
      "nome": "Gilson Marques",
      "partido": "NOVO",
      "uf": "SC",
      "presencaSessoes": 1
    },
    {
      "nome": "Paulo Pereira da Silva",
      "partido": "SOLIDARIEDADE",
      "uf": "SP",
      "presencaSessoes": 1
    },
    {
      "nome": "Marcos Pereira",
      "partido": "REPUBLICANOS",
      "uf": "SP",
      "presencaSessoes": 1
    },
    {
      "nome": "José Guimarães",
      "partido": "PT",
      "uf": "CE",
      "presencaSessoes": 1
    },
    {
      "nome": "Daniel Trzeciak",
      "partido": "PSDB",
      "uf": "RS",
      "presencaSessoes": 1
    },
    {
      "nome": "Lafayette de Andrada",
      "partido": "REPUBLICANOS",
      "uf": "MG",
      "presencaSessoes": 1
    },
    {
      "nome": "Aécio Neves",
      "partido": "PSDB",
      "uf": "MG",
      "presencaSessoes": 1
    },
    {
      "nome": "Cleber Verde",
      "partido": "REPUBLICANOS",
      "uf": "MA",
      "presencaSessoes": 1
    },
    {
      "nome": "João Maia",
      "partido": "PL",
      "uf": "RN",
      "presencaSessoes": 1
    },
    {
      "nome": "Emidinho Madeira",
      "partido": "PSB",
      "uf": "MG",
      "presencaSessoes": 1
    },
    {
      "nome": "Félix Mendonça Júnior",
      "partido": "PDT",
      "uf": "BA",
      "presencaSessoes": 1
    },
    {
      "nome": "Áurea Carolina",
      "partido": "PSOL",
      "uf": "MG",
      "presencaSessoes": 1
    },
    {
      "nome": "Fred Costa",
      "partido": "PATRIOTA",
      "uf": "MG",
      "presencaSessoes": 1
    },
    {
      "nome": "Franco Cartafina",
      "partido": "PP",
      "uf": "MG",
      "presencaSessoes": 1
    },
    {
      "nome": "Rose Modesto",
      "partido": "PSDB",
      "uf": "MS",
      "presencaSessoes": 1
    },
    {
      "nome": "Dagoberto Nogueira",
      "partido": "PDT",
      "uf": "MS",
      "presencaSessoes": 1
    },
    {
      "nome": "Geovania de Sá",
      "partido": "PSDB",
      "uf": "SC",
      "presencaSessoes": 1
    },
    {
      "nome": "Bilac Pinto",
      "partido": "DEM",
      "uf": "MG",
      "presencaSessoes": 1
    },
    {
      "nome": "Afonso Hamm",
      "partido": "PP",
      "uf": "RS",
      "presencaSessoes": 1
    },
    {
      "nome": "André Figueiredo",
      "partido": "PDT",
      "uf": "CE",
      "presencaSessoes": 1
    },
    {
      "nome": "Capitão Augusto",
      "partido": "PL",
      "uf": "SP",
      "presencaSessoes": 1
    },
    {
      "nome": "Delegado Antônio Furtado",
      "partido": "PSL",
      "uf": "RJ",
      "presencaSessoes": 1
    },
    {
      "nome": "Wilson Santiago",
      "partido": "PTB",
      "uf": "PB",
      "presencaSessoes": 1
    },
    {
      "nome": "Mário Negromonte Jr.",
      "partido": "PP",
      "uf": "BA",
      "presencaSessoes": 1
    },
    {
      "nome": "Dr. Leonardo",
      "partido": "SOLIDARIEDADE",
      "uf": "MT",
      "presencaSessoes": 1
    },
    {
      "nome": "Carlos Sampaio",
      "partido": "PSDB",
      "uf": "SP",
      "presencaSessoes": 1
    },
    {
      "nome": "Covatti Filho",
      "partido": "PP",
      "uf": "RS",
      "presencaSessoes": 1
    },
    {
      "nome": "Aluisio Mendes",
      "partido": "PSC",
      "uf": "MA",
      "presencaSessoes": 1
    },
    {
      "nome": "André Fufuca",
      "partido": "PP",
      "uf": "MA",
      "presencaSessoes": 1
    },
    {
      "nome": "Márcio Labre",
      "partido": "PSL",
      "uf": "RJ",
      "presencaSessoes": 1
    },
    {
      "nome": "Marcelo Álvaro Antônio",
      "partido": "PSL",
      "uf": "MG",
      "presencaSessoes": 1
    },
    {
      "nome": "Júnior Ferrari",
      "partido": "PSD",
      "uf": "PA",
      "presencaSessoes": 1
    },
    {
      "nome": "Angela Amin",
      "partido": "PP",
      "uf": "SC",
      "presencaSessoes": 1
    },
    {
      "nome": "Abílio Santana",
      "partido": "PL",
      "uf": "BA",
      "presencaSessoes": 1
    },
    {
      "nome": "José Ricardo",
      "partido": "PT",
      "uf": "AM",
      "presencaSessoes": 1
    },
    {
      "nome": "Marcelo Ramos",
      "partido": "PL",
      "uf": "AM",
      "presencaSessoes": 1
    },
    {
      "nome": "Sidney Leite",
      "partido": "PSD",
      "uf": "AM",
      "presencaSessoes": 1
    },
    {
      "nome": "Fabio Schiochet",
      "partido": "PSL",
      "uf": "SC",
      "presencaSessoes": 1
    },
    {
      "nome": "Guiga Peixoto",
      "partido": "PSL",
      "uf": "SP",
      "presencaSessoes": 1
    },
    {
      "nome": "Paulo Pimenta",
      "partido": "PT",
      "uf": "RS",
      "presencaSessoes": 1
    },
    {
      "nome": "Giacobo",
      "partido": "PL",
      "uf": "PR",
      "presencaSessoes": 1
    },
    {
      "nome": "Fernando Rodolfo",
      "partido": "PL",
      "uf": "PE",
      "presencaSessoes": 1
    },
    {
      "nome": "Ossesio Silva",
      "partido": "REPUBLICANOS",
      "uf": "PE",
      "presencaSessoes": 1
    },
    {
      "nome": "Osmar Terra",
      "partido": "MDB",
      "uf": "RS",
      "presencaSessoes": 1
    },
    {
      "nome": "Samuel Moreira",
      "partido": "PSDB",
      "uf": "SP",
      "presencaSessoes": 1
    },
    {
      "nome": "Professora Dayane Pimentel",
      "partido": "PSL",
      "uf": "BA",
      "presencaSessoes": 1
    },
    {
      "nome": "Natália Bonavides",
      "partido": "PT",
      "uf": "RN",
      "presencaSessoes": 1
    },
    {
      "nome": "Luiza Erundina",
      "partido": "PSOL",
      "uf": "SP",
      "presencaSessoes": 1
    },
    {
      "nome": "Delegado Pablo",
      "partido": "PSL",
      "uf": "AM",
      "presencaSessoes": 1
    },
    {
      "nome": "Norma Ayub",
      "partido": "DEM",
      "uf": "ES",
      "presencaSessoes": 1
    },
    {
      "nome": "Rodrigo Maia",
      "partido": "DEM",
      "uf": "RJ",
      "presencaSessoes": 1
    },
    {
      "nome": "Isnaldo Bulhões Jr.",
      "partido": "MDB",
      "uf": "AL",
      "presencaSessoes": 1
    },
    {
      "nome": "Otto Alencar Filho",
      "partido": "PSD",
      "uf": "BA",
      "presencaSessoes": 1
    },
    {
      "nome": "Carmen Zanotto",
      "partido": "CIDADANIA",
      "uf": "SC",
      "presencaSessoes": 1
    },
    {
      "nome": "André de Paula",
      "partido": "PSD",
      "uf": "PE",
      "presencaSessoes": 1
    },
    {
      "nome": "Gustavo Fruet",
      "partido": "PDT",
      "uf": "PR",
      "presencaSessoes": 1
    },
    {
      "nome": "Pedro Lucas Fernandes",
      "partido": "PTB",
      "uf": "MA",
      "presencaSessoes": 1
    },
    {
      "nome": "Lincoln Portela",
      "partido": "PL",
      "uf": "MG",
      "presencaSessoes": 1
    },
    {
      "nome": "Walter Alves",
      "partido": "MDB",
      "uf": "RN",
      "presencaSessoes": 1
    },
    {
      "nome": "André Janones",
      "partido": "AVANTE",
      "uf": "MG",
      "presencaSessoes": 1
    },
    {
      "nome": "Jorge Braz",
      "partido": "REPUBLICANOS",
      "uf": "RJ",
      "presencaSessoes": 1
    },
    {
      "nome": "Delegado Waldir",
      "partido": "PSL",
      "uf": "GO",
      "presencaSessoes": 1
    },
    {
      "nome": "Vitor Hugo",
      "partido": "PSL",
      "uf": "GO",
      "presencaSessoes": 1
    },
    {
      "nome": "Reinhold Stephanes Junior",
      "partido": "PSD",
      "uf": "PR",
      "presencaSessoes": 1
    },
    {
      "nome": "André Ferreira",
      "partido": "PSC",
      "uf": "PE",
      "presencaSessoes": 1
    },
    {
      "nome": "Bia Cavassa",
      "partido": "PSDB",
      "uf": "MS",
      "presencaSessoes": 1
    },
    {
      "nome": "Eduardo Barbosa",
      "partido": "PSDB",
      "uf": "MG",
      "presencaSessoes": 1
    },
    {
      "nome": "Maurício Dziedricki",
      "partido": "PTB",
      "uf": "RS",
      "presencaSessoes": 1
    },
    {
      "nome": "Paulo Magalhães",
      "partido": "PSD",
      "uf": "BA",
      "presencaSessoes": 1
    },
    {
      "nome": "Tiago Mitraud",
      "partido": "NOVO",
      "uf": "MG",
      "presencaSessoes": 1
    },
    {
      "nome": "Merlong Solano",
      "partido": "PT",
      "uf": "PI",
      "presencaSessoes": 1
    },
    {
      "nome": "Junio Amaral",
      "partido": "PSL",
      "uf": "MG",
      "presencaSessoes": 1
    },
    {
      "nome": "Marcos Soares",
      "partido": "DEM",
      "uf": "RJ",
      "presencaSessoes": 1
    },
    {
      "nome": "Arlindo Chinaglia",
      "partido": "PT",
      "uf": "SP",
      "presencaSessoes": 1
    },
    {
      "nome": "Ricardo Silva",
      "partido": "PSB",
      "uf": "SP",
      "presencaSessoes": 1
    },
    {
      "nome": "Danilo Forte",
      "partido": "PSDB",
      "uf": "CE",
      "presencaSessoes": 1
    },
    {
      "nome": "Carla Dickson",
      "partido": "PROS",
      "uf": "RN",
      "presencaSessoes": 1
    },
    {
      "nome": "LEO DE BRITO",
      "partido": "PT",
      "uf": "AC",
      "presencaSessoes": 1
    },
    {
      "nome": "Neucimar Fraga",
      "partido": "PSD",
      "uf": "ES",
      "presencaSessoes": 1
    },
    {
      "nome": "Pedro Vilela",
      "partido": "PSDB",
      "uf": "AL",
      "presencaSessoes": 1
    },
    {
      "nome": "Ricardo da Karol",
      "partido": "PSC",
      "uf": "RJ",
      "presencaSessoes": 1
    },
    {
      "nome": "Luiz Lima",
      "partido": "PSL",
      "uf": "RJ",
      "presencaSessoes": 1
    },
    {
      "nome": "Renata Abreu",
      "partido": "PODE",
      "uf": "SP",
      "presencaSessoes": 1
    },
    {
      "nome": "Josivaldo JP",
      "partido": "PODE",
      "uf": "MA",
      "presencaSessoes": 1
    },
    {
      "nome": "Vivi Reis",
      "partido": "PSOL",
      "uf": "PA",
      "presencaSessoes": 1
    },
    {
      "nome": "Rubens Bueno",
      "partido": "CIDADANIA",
      "uf": "PR",
      "presencaSessoes": 1
    },
    {
      "nome": "Otavio Leite",
      "partido": "PSDB",
      "uf": "RJ",
      "presencaSessoes": 1
    },
    {
      "nome": "Tia Eron",
      "partido": "REPUBLICANOS",
      "uf": "BA",
      "presencaSessoes": 1
    },
    {
      "nome": "Leonardo Gadelha",
      "partido": "PSC",
      "uf": "PB",
      "presencaSessoes": 1
    },
    {
      "nome": "Laerte Bessa",
      "partido": "PL",
      "uf": "DF",
      "presencaSessoes": 1
    },
    {
      "nome": "Rafafá",
      "partido": "PSDB",
      "uf": "PB",
      "presencaSessoes": 1
    },
    {
      "nome": "Jandira Feghali",
      "partido": "PCdoB",
      "uf": "RJ",
      "presencaSessoes": 1
    },
    {
      "nome": "Rossoni",
      "partido": "PSDB",
      "uf": "PR",
      "presencaSessoes": 1
    },
    {
      "nome": "Paulo Vicente Caleffi",
      "partido": "PSD",
      "uf": "RS",
      "presencaSessoes": 1
    },
    {
      "nome": "Totonho Lopes",
      "partido": "PDT",
      "uf": "CE",
      "presencaSessoes": 1
    }
  ],
  "presencaPorPartido": {
    "MDB": {
      "somaPresenca": 32.99773641018169,
      "qtdDeputados": 34
    },
    "PTB": {
      "somaPresenca": 9.869158878504674,
      "qtdDeputados": 10
    },
    "PDT": {
      "somaPresenca": 24.724299065420563,
      "qtdDeputados": 25
    },
    "PT": {
      "somaPresenca": 52.37854061826023,
      "qtdDeputados": 53
    },
    "DEM": {
      "somaPresenca": 28.21685352308669,
      "qtdDeputados": 29
    },
    "PCdoB": {
      "somaPresenca": 6.925233644859813,
      "qtdDeputados": 7
    },
    "PSB": {
      "somaPresenca": 29.01802309262503,
      "qtdDeputados": 30
    },
    "PSDB": {
      "somaPresenca": 32.58878504672897,
      "qtdDeputados": 33
    },
    "PTC": {
      "somaPresenca": 0,
      "qtdDeputados": 0
    },
    "PSC": {
      "somaPresenca": 10.934579439252337,
      "qtdDeputados": 11
    },
    "PMN": {
      "somaPresenca": 0,
      "qtdDeputados": 0
    },
    "CIDADANIA": {
      "somaPresenca": 6.9112149532710285,
      "qtdDeputados": 7
    },
    "PV": {
      "somaPresenca": 3.957943925233645,
      "qtdDeputados": 4
    },
    "AVANTE": {
      "somaPresenca": 7.686915887850467,
      "qtdDeputados": 8
    },
    "PP": {
      "somaPresenca": 38.82997843278218,
      "qtdDeputados": 40
    },
    "PSTU": {
      "somaPresenca": 0,
      "qtdDeputados": 0
    },
    "PCB": {
      "somaPresenca": 0,
      "qtdDeputados": 0
    },
    "PRTB": {
      "somaPresenca": 0,
      "qtdDeputados": 0
    },
    "DC": {
      "somaPresenca": 0,
      "qtdDeputados": 0
    },
    "PCO": {
      "somaPresenca": 0,
      "qtdDeputados": 0
    },
    "PODE": {
      "somaPresenca": 9.841121495327103,
      "qtdDeputados": 10
    },
    "PSL": {
      "somaPresenca": 52.17102981162037,
      "qtdDeputados": 53
    },
    "REPUBLICANOS": {
      "somaPresenca": 32.33318182647347,
      "qtdDeputados": 33
    },
    "PSOL": {
      "somaPresenca": 9.897196261682243,
      "qtdDeputados": 10
    },
    "PL": {
      "somaPresenca": 39.83372014771571,
      "qtdDeputados": 41
    },
    "PSD": {
      "somaPresenca": 34.43926948469519,
      "qtdDeputados": 35
    },
    "PATRIOTA": {
      "somaPresenca": 5.920472579791924,
      "qtdDeputados": 6
    },
    "PROS": {
      "somaPresenca": 10.82162341667062,
      "qtdDeputados": 11
    },
    "SOLIDARIEDADE": {
      "somaPresenca": 13.514018691588785,
      "qtdDeputados": 14
    },
    "NOVO": {
      "somaPresenca": 7.9766355140186915,
      "qtdDeputados": 8
    },
    "REDE": {
      "somaPresenca": 0.9813084112149533,
      "qtdDeputados": 1
    },
    "PMB": {
      "somaPresenca": 0,
      "qtdDeputados": 0
    },
    "UP": {
      "somaPresenca": 0,
      "qtdDeputados": 0
    }
  },
  "presencaPorUnidadeFederativa": {
    "AC": {
      "nome": "Acre",
      "qtdDeputados": 8,
      "somaPresenca": 7.85981308411215
    },
    "AL": {
      "nome": "Alagoas",
      "qtdDeputados": 9,
      "somaPresenca": 8.761682242990656
    },
    "AP": {
      "nome": "Amapá",
      "qtdDeputados": 8,
      "somaPresenca": 7.509770603228548
    },
    "AM": {
      "nome": "Amazonas",
      "qtdDeputados": 8,
      "somaPresenca": 7.794392523364486
    },
    "BA": {
      "nome": "Bahia",
      "qtdDeputados": 39,
      "somaPresenca": 37.99584748613301
    },
    "CE": {
      "nome": "Ceará",
      "qtdDeputados": 22,
      "somaPresenca": 21.454178642755977
    },
    "DF": {
      "nome": "Distrito Federal",
      "qtdDeputados": 8,
      "somaPresenca": 7.9299065420560755
    },
    "ES": {
      "nome": "Espírito Santo",
      "qtdDeputados": 10,
      "somaPresenca": 9.943881149709046
    },
    "GO": {
      "nome": "Goiás",
      "qtdDeputados": 17,
      "somaPresenca": 16.738317757009348
    },
    "MA": {
      "nome": "Maranhão",
      "qtdDeputados": 18,
      "somaPresenca": 17.536870239451513
    },
    "MT": {
      "nome": "Mato Grosso",
      "qtdDeputados": 8,
      "somaPresenca": 7.891836173721825
    },
    "MS": {
      "nome": "Mato Grosso do Sul",
      "qtdDeputados": 8,
      "somaPresenca": 7.869158878504672
    },
    "MG": {
      "nome": "Minas Gerais",
      "qtdDeputados": 53,
      "somaPresenca": 52.06479750778816
    },
    "PA": {
      "nome": "Pará",
      "qtdDeputados": 17,
      "somaPresenca": 16.509345794392523
    },
    "PB": {
      "nome": "Paraíba",
      "qtdDeputados": 12,
      "somaPresenca": 11.841121495327103
    },
    "PR": {
      "nome": "Paraná",
      "qtdDeputados": 30,
      "somaPresenca": 29.593369776053606
    },
    "PE": {
      "nome": "Pernambuco",
      "qtdDeputados": 25,
      "somaPresenca": 23.79906542056075
    },
    "PI": {
      "nome": "Piauí",
      "qtdDeputados": 10,
      "somaPresenca": 9.857165109034268
    },
    "RJ": {
      "nome": "Rio de Janeiro",
      "qtdDeputados": 46,
      "somaPresenca": 45.336179881843876
    },
    "RN": {
      "nome": "Rio Grande do Norte",
      "qtdDeputados": 8,
      "somaPresenca": 7.9485981308411215
    },
    "RS": {
      "nome": "Rio Grande do Sul",
      "qtdDeputados": 31,
      "somaPresenca": 30.62397482357429
    },
    "RO": {
      "nome": "Rondônia",
      "qtdDeputados": 8,
      "somaPresenca": 7.88785046728972
    },
    "RR": {
      "nome": "Roraima",
      "qtdDeputados": 8,
      "somaPresenca": 7.728971962616822
    },
    "SC": {
      "nome": "Santa Catarina",
      "qtdDeputados": 16,
      "somaPresenca": 15.906542056074766
    },
    "SP": {
      "nome": "São Paulo",
      "qtdDeputados": 70,
      "somaPresenca": 68.80676355808559
    },
    "SE": {
      "nome": "Sergipe",
      "qtdDeputados": 8,
      "somaPresenca": 7.771028037383178
    },
    "TO": {
      "nome": "Tocantins",
      "qtdDeputados": 8,
      "somaPresenca": 7.808411214953272
    }
  },
  "deputadoPresencaMenor": {
    "ideCadastro": "92172",
    "matricula": "569",
    "nome": "MILTON COELHO DA SILVA NETO",
    "dias": 24,
    "sessoes": 30,
    "faltasSessoes": 15,
    "faltasDias": 12,
    "presencaDias": 0.5,
    "presencaSessoes": 0.5,
    "urlFoto": "https://www.camara.leg.br/internet/deputado/bandep/92172.jpg",
    "siglaUf": "PE",
    "siglaPartido": "PSB",
    "nomeEleitoral": "Milton Coelho",
    "ultimoStatus": "2021-01-01T17:33",
    "gastos": [
      {
        "ano": 2019,
        "mes": 2,
        "valor": 0
      },
      {
        "ano": 2019,
        "mes": 3,
        "valor": 0
      },
      {
        "ano": 2019,
        "mes": 4,
        "valor": 0
      },
      {
        "ano": 2019,
        "mes": 5,
        "valor": 0
      },
      {
        "ano": 2019,
        "mes": 6,
        "valor": 0
      },
      {
        "ano": 2019,
        "mes": 7,
        "valor": 0
      },
      {
        "ano": 2019,
        "mes": 8,
        "valor": 0
      },
      {
        "ano": 2019,
        "mes": 9,
        "valor": 0
      },
      {
        "ano": 2019,
        "mes": 10,
        "valor": 0
      },
      {
        "ano": 2019,
        "mes": 11,
        "valor": 0
      },
      {
        "ano": 2019,
        "mes": 12,
        "valor": 0
      },
      {
        "ano": 2020,
        "mes": 1,
        "valor": 0
      },
      {
        "ano": 2020,
        "mes": 2,
        "valor": 0
      },
      {
        "ano": 2020,
        "mes": 3,
        "valor": 0
      },
      {
        "ano": 2020,
        "mes": 4,
        "valor": 0
      },
      {
        "ano": 2020,
        "mes": 5,
        "valor": 0
      },
      {
        "ano": 2020,
        "mes": 6,
        "valor": 0
      },
      {
        "ano": 2020,
        "mes": 7,
        "valor": 0
      },
      {
        "ano": 2020,
        "mes": 8,
        "valor": 0
      },
      {
        "ano": 2020,
        "mes": 9,
        "valor": 0
      },
      {
        "ano": 2020,
        "mes": 10,
        "valor": 0
      },
      {
        "ano": 2020,
        "mes": 11,
        "valor": 0
      },
      {
        "ano": 2020,
        "mes": 12,
        "valor": 0
      },
      {
        "ano": 2021,
        "mes": 1,
        "valor": 18126.94
      },
      {
        "ano": 2021,
        "mes": 2,
        "valor": 25838.34
      },
      {
        "ano": 2021,
        "mes": 3,
        "valor": 31022.45
      },
      {
        "ano": 2021,
        "mes": 4,
        "valor": 13653.07
      }
    ],
    "gastoMedio": 22160.199999999997,
    "gastoMenor": 0,
    "gastoMaior": 31022.45,
    "gastoTotal": 88640.79999999999,
    "proposicoes": "1"
  },
  "deputadoPresencaMaior": {
    "ideCadastro": "204373",
    "matricula": "484",
    "nome": "HÉLIO FRANCISCO DA COSTA",
    "dias": 144,
    "sessoes": 214,
    "faltasSessoes": 0,
    "faltasDias": 0,
    "presencaDias": 1,
    "presencaSessoes": 1,
    "urlFoto": "https://www.camara.leg.br/internet/deputado/bandep/204373.jpg",
    "siglaUf": "SC",
    "siglaPartido": "REPUBLICANOS",
    "nomeEleitoral": "Hélio Costa",
    "ultimoStatus": "2019-02-01T11:45",
    "gastos": [
      {
        "ano": 2019,
        "mes": 2,
        "valor": 27968.79
      },
      {
        "ano": 2019,
        "mes": 3,
        "valor": 20804.69
      },
      {
        "ano": 2019,
        "mes": 4,
        "valor": 38531.53
      },
      {
        "ano": 2019,
        "mes": 5,
        "valor": 22976.99
      },
      {
        "ano": 2019,
        "mes": 6,
        "valor": 32776.84
      },
      {
        "ano": 2019,
        "mes": 7,
        "valor": 32341.54
      },
      {
        "ano": 2019,
        "mes": 8,
        "valor": 25696.32
      },
      {
        "ano": 2019,
        "mes": 9,
        "valor": 34635.53
      },
      {
        "ano": 2019,
        "mes": 10,
        "valor": 15434.75
      },
      {
        "ano": 2019,
        "mes": 11,
        "valor": 44696.23
      },
      {
        "ano": 2019,
        "mes": 12,
        "valor": 15549.7
      },
      {
        "ano": 2020,
        "mes": 1,
        "valor": 9155.59
      },
      {
        "ano": 2020,
        "mes": 2,
        "valor": 25625.97
      },
      {
        "ano": 2020,
        "mes": 3,
        "valor": 22991.9
      },
      {
        "ano": 2020,
        "mes": 4,
        "valor": 9862.67
      },
      {
        "ano": 2020,
        "mes": 5,
        "valor": 12755.26
      },
      {
        "ano": 2020,
        "mes": 6,
        "valor": 8895.57
      },
      {
        "ano": 2020,
        "mes": 7,
        "valor": 20661.17
      },
      {
        "ano": 2020,
        "mes": 8,
        "valor": 23312.29
      },
      {
        "ano": 2020,
        "mes": 9,
        "valor": 22116.66
      },
      {
        "ano": 2020,
        "mes": 10,
        "valor": 10350.54
      },
      {
        "ano": 2020,
        "mes": 11,
        "valor": 29759.41
      },
      {
        "ano": 2020,
        "mes": 12,
        "valor": 19789.26
      },
      {
        "ano": 2021,
        "mes": 1,
        "valor": 21892.99
      },
      {
        "ano": 2021,
        "mes": 2,
        "valor": 26467.06
      },
      {
        "ano": 2021,
        "mes": 3,
        "valor": 15344.52
      },
      {
        "ano": 2021,
        "mes": 4,
        "valor": 11028.86
      }
    ],
    "gastoMedio": 22274.91222222222,
    "gastoMenor": 8895.57,
    "gastoMaior": 44696.23,
    "gastoTotal": 601422.63,
    "proposicoes": "1"
  },
  "presencaMedia": 0.9800562194129758,
  "listaDeputadosPioresPresencas": [
    {
      "ideCadastro": "92172",
      "matricula": "569",
      "nome": "MILTON COELHO DA SILVA NETO",
      "dias": 24,
      "sessoes": 30,
      "faltasSessoes": 15,
      "faltasDias": 12,
      "presencaDias": 0.5,
      "presencaSessoes": 0.5,
      "urlFoto": "https://www.camara.leg.br/internet/deputado/bandep/92172.jpg",
      "siglaUf": "PE",
      "siglaPartido": "PSB",
      "nomeEleitoral": "Milton Coelho",
      "ultimoStatus": "2021-01-01T17:33",
      "gastos": [
        {
          "ano": 2019,
          "mes": 2,
          "valor": 0
        },
        {
          "ano": 2019,
          "mes": 3,
          "valor": 0
        },
        {
          "ano": 2019,
          "mes": 4,
          "valor": 0
        },
        {
          "ano": 2019,
          "mes": 5,
          "valor": 0
        },
        {
          "ano": 2019,
          "mes": 6,
          "valor": 0
        },
        {
          "ano": 2019,
          "mes": 7,
          "valor": 0
        },
        {
          "ano": 2019,
          "mes": 8,
          "valor": 0
        },
        {
          "ano": 2019,
          "mes": 9,
          "valor": 0
        },
        {
          "ano": 2019,
          "mes": 10,
          "valor": 0
        },
        {
          "ano": 2019,
          "mes": 11,
          "valor": 0
        },
        {
          "ano": 2019,
          "mes": 12,
          "valor": 0
        },
        {
          "ano": 2020,
          "mes": 1,
          "valor": 0
        },
        {
          "ano": 2020,
          "mes": 2,
          "valor": 0
        },
        {
          "ano": 2020,
          "mes": 3,
          "valor": 0
        },
        {
          "ano": 2020,
          "mes": 4,
          "valor": 0
        },
        {
          "ano": 2020,
          "mes": 5,
          "valor": 0
        },
        {
          "ano": 2020,
          "mes": 6,
          "valor": 0
        },
        {
          "ano": 2020,
          "mes": 7,
          "valor": 0
        },
        {
          "ano": 2020,
          "mes": 8,
          "valor": 0
        },
        {
          "ano": 2020,
          "mes": 9,
          "valor": 0
        },
        {
          "ano": 2020,
          "mes": 10,
          "valor": 0
        },
        {
          "ano": 2020,
          "mes": 11,
          "valor": 0
        },
        {
          "ano": 2020,
          "mes": 12,
          "valor": 0
        },
        {
          "ano": 2021,
          "mes": 1,
          "valor": 18126.94
        },
        {
          "ano": 2021,
          "mes": 2,
          "valor": 25838.34
        },
        {
          "ano": 2021,
          "mes": 3,
          "valor": 31022.45
        },
        {
          "ano": 2021,
          "mes": 4,
          "valor": 13653.07
        }
      ],
      "gastoMedio": 22160.199999999997,
      "gastoMenor": 0,
      "gastoMaior": 31022.45,
      "gastoTotal": 88640.79999999999,
      "proposicoes": "1"
    },
    {
      "ideCadastro": "160667",
      "matricula": "348",
      "nome": "GUILHERME MUSSI FERREIRA",
      "dias": 100,
      "sessoes": 143,
      "faltasSessoes": 33,
      "faltasDias": 26,
      "presencaDias": 0.74,
      "presencaSessoes": 0.7692307692307693,
      "urlFoto": "https://www.camara.leg.br/internet/deputado/bandep/160667.jpg",
      "siglaUf": "SP",
      "siglaPartido": "PP",
      "nomeEleitoral": "Guilherme Mussi",
      "ultimoStatus": "2019-12-13T00:00",
      "gastos": [
        {
          "ano": 2019,
          "mes": 2,
          "valor": 47003.01
        },
        {
          "ano": 2019,
          "mes": 3,
          "valor": 26600.04
        },
        {
          "ano": 2019,
          "mes": 4,
          "valor": 44385.12
        },
        {
          "ano": 2019,
          "mes": 5,
          "valor": 39681.93
        },
        {
          "ano": 2019,
          "mes": 6,
          "valor": 41069.59
        },
        {
          "ano": 2019,
          "mes": 7,
          "valor": 39423.17
        },
        {
          "ano": 2019,
          "mes": 8,
          "valor": 12803.27
        },
        {
          "ano": 2019,
          "mes": 9,
          "valor": 0
        },
        {
          "ano": 2019,
          "mes": 10,
          "valor": 0
        },
        {
          "ano": 2019,
          "mes": 11,
          "valor": 0
        },
        {
          "ano": 2019,
          "mes": 12,
          "valor": 19486.67
        },
        {
          "ano": 2020,
          "mes": 1,
          "valor": 12062.77
        },
        {
          "ano": 2020,
          "mes": 2,
          "valor": 34579.27
        },
        {
          "ano": 2020,
          "mes": 3,
          "valor": 25857.73
        },
        {
          "ano": 2020,
          "mes": 4,
          "valor": 10349.26
        },
        {
          "ano": 2020,
          "mes": 5,
          "valor": 10349.26
        },
        {
          "ano": 2020,
          "mes": 6,
          "valor": 10410.12
        },
        {
          "ano": 2020,
          "mes": 7,
          "valor": 10372.03
        },
        {
          "ano": 2020,
          "mes": 8,
          "valor": 11677.01
        },
        {
          "ano": 2020,
          "mes": 9,
          "valor": 10076.55
        },
        {
          "ano": 2020,
          "mes": 10,
          "valor": 10493.76
        },
        {
          "ano": 2020,
          "mes": 11,
          "valor": 10349.29
        },
        {
          "ano": 2020,
          "mes": 12,
          "valor": 13592.66
        },
        {
          "ano": 2021,
          "mes": 1,
          "valor": 10409.71
        },
        {
          "ano": 2021,
          "mes": 2,
          "valor": 10457.72
        },
        {
          "ano": 2021,
          "mes": 3,
          "valor": 10000
        },
        {
          "ano": 2021,
          "mes": 4,
          "valor": 10000
        }
      ],
      "gastoMedio": 20062.080833333333,
      "gastoMenor": 0,
      "gastoMaior": 47003.01,
      "gastoTotal": 481489.94,
      "proposicoes": "2"
    },
    {
      "ideCadastro": "178921",
      "matricula": "159",
      "nome": "SEBASTIAO IGNACIO DE OLIVEIRA JUNIOR",
      "dias": 144,
      "sessoes": 214,
      "faltasSessoes": 42,
      "faltasDias": 29,
      "presencaDias": 0.7986111111111112,
      "presencaSessoes": 0.8037383177570093,
      "urlFoto": "https://www.camara.leg.br/internet/deputado/bandep/178921.jpg",
      "siglaUf": "PE",
      "siglaPartido": "AVANTE",
      "nomeEleitoral": "Sebastião Oliveira",
      "ultimoStatus": "2019-02-01T11:45",
      "gastos": [
        {
          "ano": 2019,
          "mes": 2,
          "valor": 22586.64
        },
        {
          "ano": 2019,
          "mes": 3,
          "valor": 27932.34
        },
        {
          "ano": 2019,
          "mes": 4,
          "valor": 29006.35
        },
        {
          "ano": 2019,
          "mes": 5,
          "valor": 36165.27
        },
        {
          "ano": 2019,
          "mes": 6,
          "valor": 57915.75
        },
        {
          "ano": 2019,
          "mes": 7,
          "valor": 39341.25
        },
        {
          "ano": 2019,
          "mes": 8,
          "valor": 53415.5
        },
        {
          "ano": 2019,
          "mes": 9,
          "valor": 54971.2
        },
        {
          "ano": 2019,
          "mes": 10,
          "valor": 57988.38
        },
        {
          "ano": 2019,
          "mes": 11,
          "valor": 56943.15
        },
        {
          "ano": 2019,
          "mes": 12,
          "valor": 27879.7
        },
        {
          "ano": 2020,
          "mes": 1,
          "valor": 54839.67
        },
        {
          "ano": 2020,
          "mes": 2,
          "valor": 46810.53
        },
        {
          "ano": 2020,
          "mes": 3,
          "valor": 34993.03
        },
        {
          "ano": 2020,
          "mes": 4,
          "valor": 17864.82
        },
        {
          "ano": 2020,
          "mes": 5,
          "valor": 19116.15
        },
        {
          "ano": 2020,
          "mes": 6,
          "valor": 21767.23
        },
        {
          "ano": 2020,
          "mes": 7,
          "valor": 39740.91
        },
        {
          "ano": 2020,
          "mes": 8,
          "valor": 40681.51
        },
        {
          "ano": 2020,
          "mes": 9,
          "valor": 46525.4
        },
        {
          "ano": 2020,
          "mes": 10,
          "valor": 45575.18
        },
        {
          "ano": 2020,
          "mes": 11,
          "valor": 84617.4
        },
        {
          "ano": 2020,
          "mes": 12,
          "valor": 43969.27
        },
        {
          "ano": 2021,
          "mes": 1,
          "valor": 31067.95
        },
        {
          "ano": 2021,
          "mes": 2,
          "valor": 50542.71
        },
        {
          "ano": 2021,
          "mes": 3,
          "valor": 45914.72
        },
        {
          "ano": 2021,
          "mes": 4,
          "valor": 36556.58
        }
      ],
      "gastoMedio": 41656.61444444445,
      "gastoMenor": 17864.82,
      "gastoMaior": 84617.4,
      "gastoTotal": 1124728.59,
      "proposicoes": "3"
    },
    {
      "ideCadastro": "74079",
      "matricula": "26",
      "nome": "JOSÉ BENITO PRIANTE JÚNIOR",
      "dias": 144,
      "sessoes": 214,
      "faltasSessoes": 40,
      "faltasDias": 33,
      "presencaDias": 0.7708333333333334,
      "presencaSessoes": 0.8130841121495327,
      "urlFoto": "https://www.camara.leg.br/internet/deputado/bandep/74079.jpg",
      "siglaUf": "PA",
      "siglaPartido": "MDB",
      "nomeEleitoral": "José Priante",
      "ultimoStatus": "2019-02-01T11:45",
      "gastos": [
        {
          "ano": 2019,
          "mes": 2,
          "valor": 46954.82
        },
        {
          "ano": 2019,
          "mes": 3,
          "valor": 41701.39
        },
        {
          "ano": 2019,
          "mes": 4,
          "valor": 48717.42
        },
        {
          "ano": 2019,
          "mes": 5,
          "valor": 40736.74
        },
        {
          "ano": 2019,
          "mes": 6,
          "valor": 44061.24
        },
        {
          "ano": 2019,
          "mes": 7,
          "valor": 39701.18
        },
        {
          "ano": 2019,
          "mes": 8,
          "valor": 57368.22
        },
        {
          "ano": 2019,
          "mes": 9,
          "valor": 50468.56
        },
        {
          "ano": 2019,
          "mes": 10,
          "valor": 40749.86
        },
        {
          "ano": 2019,
          "mes": 11,
          "valor": 36892.52
        },
        {
          "ano": 2019,
          "mes": 12,
          "valor": 11408.41
        },
        {
          "ano": 2020,
          "mes": 1,
          "valor": 6563.66
        },
        {
          "ano": 2020,
          "mes": 2,
          "valor": 26031.81
        },
        {
          "ano": 2020,
          "mes": 3,
          "valor": -3621.32
        },
        {
          "ano": 2020,
          "mes": 4,
          "valor": 0
        },
        {
          "ano": 2020,
          "mes": 5,
          "valor": 0
        },
        {
          "ano": 2020,
          "mes": 6,
          "valor": 1801.94
        },
        {
          "ano": 2020,
          "mes": 7,
          "valor": 5873.2
        },
        {
          "ano": 2020,
          "mes": 8,
          "valor": 11054.75
        },
        {
          "ano": 2020,
          "mes": 9,
          "valor": 6845.06
        },
        {
          "ano": 2020,
          "mes": 10,
          "valor": 2990.51
        },
        {
          "ano": 2020,
          "mes": 11,
          "valor": 9.53
        },
        {
          "ano": 2020,
          "mes": 12,
          "valor": 3069.01
        },
        {
          "ano": 2021,
          "mes": 1,
          "valor": 20857.03
        },
        {
          "ano": 2021,
          "mes": 2,
          "valor": 9823.87
        },
        {
          "ano": 2021,
          "mes": 3,
          "valor": 10783.78
        },
        {
          "ano": 2021,
          "mes": 4,
          "valor": 5177.58
        }
      ],
      "gastoMedio": 22640.8308,
      "gastoMenor": -3621.32,
      "gastoMaior": 57368.22,
      "gastoTotal": 566020.77,
      "proposicoes": "1"
    },
    {
      "ideCadastro": "160591",
      "matricula": "16",
      "nome": "VINICIUS DE AZEVEDO GURGEL",
      "dias": 126,
      "sessoes": 187,
      "faltasSessoes": 34,
      "faltasDias": 21,
      "presencaDias": 0.8333333333333334,
      "presencaSessoes": 0.8181818181818182,
      "urlFoto": "https://www.camara.leg.br/internet/deputado/bandep/160591.jpg",
      "siglaUf": "AP",
      "siglaPartido": "PL",
      "nomeEleitoral": "Vinicius Gurgel",
      "ultimoStatus": "2020-06-22T00:00",
      "gastos": [
        {
          "ano": 2019,
          "mes": 2,
          "valor": 37556.59
        },
        {
          "ano": 2019,
          "mes": 3,
          "valor": 57271.04
        },
        {
          "ano": 2019,
          "mes": 4,
          "valor": 66848.76
        },
        {
          "ano": 2019,
          "mes": 5,
          "valor": 37035.5
        },
        {
          "ano": 2019,
          "mes": 6,
          "valor": 41305.22
        },
        {
          "ano": 2019,
          "mes": 7,
          "valor": 37621
        },
        {
          "ano": 2019,
          "mes": 8,
          "valor": 38585.75
        },
        {
          "ano": 2019,
          "mes": 9,
          "valor": 71765.21
        },
        {
          "ano": 2019,
          "mes": 10,
          "valor": 33328.24
        },
        {
          "ano": 2019,
          "mes": 11,
          "valor": 52994.42
        },
        {
          "ano": 2019,
          "mes": 12,
          "valor": 375.38
        },
        {
          "ano": 2020,
          "mes": 1,
          "valor": 0
        },
        {
          "ano": 2020,
          "mes": 2,
          "valor": 0
        },
        {
          "ano": 2020,
          "mes": 3,
          "valor": 0
        },
        {
          "ano": 2020,
          "mes": 4,
          "valor": 0
        },
        {
          "ano": 2020,
          "mes": 5,
          "valor": 0
        },
        {
          "ano": 2020,
          "mes": 6,
          "valor": 0
        },
        {
          "ano": 2020,
          "mes": 7,
          "valor": 10111.44
        },
        {
          "ano": 2020,
          "mes": 8,
          "valor": 10468.68
        },
        {
          "ano": 2020,
          "mes": 9,
          "valor": 11378.74
        },
        {
          "ano": 2020,
          "mes": 10,
          "valor": 27749.7
        },
        {
          "ano": 2020,
          "mes": 11,
          "valor": 22148.58
        },
        {
          "ano": 2020,
          "mes": 12,
          "valor": 137632.58
        },
        {
          "ano": 2021,
          "mes": 1,
          "valor": 12111.43
        },
        {
          "ano": 2021,
          "mes": 2,
          "valor": 16011.43
        },
        {
          "ano": 2021,
          "mes": 3,
          "valor": 45600
        },
        {
          "ano": 2021,
          "mes": 4,
          "valor": 78500
        }
      ],
      "gastoMedio": 40304.74714285714,
      "gastoMenor": 0,
      "gastoMaior": 137632.58,
      "gastoTotal": 846399.69,
      "proposicoes": "0"
    },
    {
      "ideCadastro": "204564",
      "matricula": "197",
      "nome": "ANDERSON MACHADO DE JESUS",
      "dias": 144,
      "sessoes": 214,
      "faltasSessoes": 37,
      "faltasDias": 24,
      "presencaDias": 0.8333333333333334,
      "presencaSessoes": 0.8271028037383178,
      "urlFoto": "https://www.camara.leg.br/internet/deputado/bandep/204564.jpg",
      "siglaUf": "BA",
      "siglaPartido": "DEM",
      "nomeEleitoral": "Igor Kannário",
      "ultimoStatus": "2019-02-01T11:45",
      "gastos": [
        {
          "ano": 2019,
          "mes": 2,
          "valor": 27773.54
        },
        {
          "ano": 2019,
          "mes": 3,
          "valor": 7621.03
        },
        {
          "ano": 2019,
          "mes": 4,
          "valor": 17037.51
        },
        {
          "ano": 2019,
          "mes": 5,
          "valor": 13853.73
        },
        {
          "ano": 2019,
          "mes": 6,
          "valor": 13958.72
        },
        {
          "ano": 2019,
          "mes": 7,
          "valor": 14793.48
        },
        {
          "ano": 2019,
          "mes": 8,
          "valor": 28009.27
        },
        {
          "ano": 2019,
          "mes": 9,
          "valor": 55150.02
        },
        {
          "ano": 2019,
          "mes": 10,
          "valor": 91727.69
        },
        {
          "ano": 2019,
          "mes": 11,
          "valor": 67435.6
        },
        {
          "ano": 2019,
          "mes": 12,
          "valor": 49664.04
        },
        {
          "ano": 2020,
          "mes": 1,
          "valor": 40119.3
        },
        {
          "ano": 2020,
          "mes": 2,
          "valor": 39303.51
        },
        {
          "ano": 2020,
          "mes": 3,
          "valor": 39829.02
        },
        {
          "ano": 2020,
          "mes": 4,
          "valor": 38796.44
        },
        {
          "ano": 2020,
          "mes": 5,
          "valor": 13796.44
        },
        {
          "ano": 2020,
          "mes": 6,
          "valor": 13796.44
        },
        {
          "ano": 2020,
          "mes": 7,
          "valor": 11716.44
        },
        {
          "ano": 2020,
          "mes": 8,
          "valor": 11716.44
        },
        {
          "ano": 2020,
          "mes": 9,
          "valor": 9716.44
        },
        {
          "ano": 2020,
          "mes": 10,
          "valor": 11716.44
        },
        {
          "ano": 2020,
          "mes": 11,
          "valor": 93779.44
        },
        {
          "ano": 2020,
          "mes": 12,
          "valor": 26329.44
        },
        {
          "ano": 2021,
          "mes": 1,
          "valor": 21026.48
        },
        {
          "ano": 2021,
          "mes": 2,
          "valor": 16579.4
        },
        {
          "ano": 2021,
          "mes": 3,
          "valor": 14777.8
        },
        {
          "ano": 2021,
          "mes": 4,
          "valor": 13900.03
        }
      ],
      "gastoMedio": 29774.96777777776,
      "gastoMenor": 7621.03,
      "gastoMaior": 93779.44,
      "gastoTotal": 803924.1299999995,
      "proposicoes": "2"
    },
    {
      "ideCadastro": "160669",
      "matricula": "99",
      "nome": "GENECIAS MATEUS NORONHA",
      "dias": 144,
      "sessoes": 214,
      "faltasSessoes": 31,
      "faltasDias": 25,
      "presencaDias": 0.8263888888888888,
      "presencaSessoes": 0.8551401869158879,
      "urlFoto": "https://www.camara.leg.br/internet/deputado/bandep/160669.jpg",
      "siglaUf": "CE",
      "siglaPartido": "SOLIDARIEDADE",
      "nomeEleitoral": "Genecias Noronha",
      "ultimoStatus": "2019-02-01T11:45",
      "gastos": [
        {
          "ano": 2019,
          "mes": 2,
          "valor": 28409.34
        },
        {
          "ano": 2019,
          "mes": 3,
          "valor": 22078.69
        },
        {
          "ano": 2019,
          "mes": 4,
          "valor": 41137.8
        },
        {
          "ano": 2019,
          "mes": 5,
          "valor": 36609.64
        },
        {
          "ano": 2019,
          "mes": 6,
          "valor": 25408.17
        },
        {
          "ano": 2019,
          "mes": 7,
          "valor": 75174.26
        },
        {
          "ano": 2019,
          "mes": 8,
          "valor": 36963.76
        },
        {
          "ano": 2019,
          "mes": 9,
          "valor": 36597.43
        },
        {
          "ano": 2019,
          "mes": 10,
          "valor": 51279.36
        },
        {
          "ano": 2019,
          "mes": 11,
          "valor": 45719.44
        },
        {
          "ano": 2019,
          "mes": 12,
          "valor": 70537.46
        },
        {
          "ano": 2020,
          "mes": 1,
          "valor": 10938.66
        },
        {
          "ano": 2020,
          "mes": 2,
          "valor": 8794.06
        },
        {
          "ano": 2020,
          "mes": 3,
          "valor": 3185.38
        },
        {
          "ano": 2020,
          "mes": 4,
          "valor": 317.06
        },
        {
          "ano": 2020,
          "mes": 5,
          "valor": 568.61
        },
        {
          "ano": 2020,
          "mes": 6,
          "valor": 1126.1
        },
        {
          "ano": 2020,
          "mes": 7,
          "valor": 2788.98
        },
        {
          "ano": 2020,
          "mes": 8,
          "valor": 4164.85
        },
        {
          "ano": 2020,
          "mes": 9,
          "valor": 7322.08
        },
        {
          "ano": 2020,
          "mes": 10,
          "valor": 10929.32
        },
        {
          "ano": 2020,
          "mes": 11,
          "valor": 8929.32
        },
        {
          "ano": 2020,
          "mes": 12,
          "valor": 15281.22
        },
        {
          "ano": 2021,
          "mes": 1,
          "valor": 3514.49
        },
        {
          "ano": 2021,
          "mes": 2,
          "valor": 5429.32
        },
        {
          "ano": 2021,
          "mes": 3,
          "valor": 8739.84
        },
        {
          "ano": 2021,
          "mes": 4,
          "valor": 107.24
        }
      ],
      "gastoMedio": 20816.736296296287,
      "gastoMenor": 107.24,
      "gastoMaior": 75174.26,
      "gastoTotal": 562051.8799999998,
      "proposicoes": "1"
    },
    {
      "ideCadastro": "204551",
      "matricula": "37",
      "nome": "JOÃO BOSCO GOMES SARAIVA",
      "dias": 144,
      "sessoes": 214,
      "faltasSessoes": 25,
      "faltasDias": 20,
      "presencaDias": 0.8611111111111112,
      "presencaSessoes": 0.883177570093458,
      "urlFoto": "https://www.camara.leg.br/internet/deputado/bandep/204551.jpg",
      "siglaUf": "AM",
      "siglaPartido": "SOLIDARIEDADE",
      "nomeEleitoral": "Bosco Saraiva",
      "ultimoStatus": "2019-02-01T11:45",
      "gastos": [
        {
          "ano": 2019,
          "mes": 2,
          "valor": 58820.28
        },
        {
          "ano": 2019,
          "mes": 3,
          "valor": 55333.61
        },
        {
          "ano": 2019,
          "mes": 4,
          "valor": 50809.94
        },
        {
          "ano": 2019,
          "mes": 5,
          "valor": 50593.23
        },
        {
          "ano": 2019,
          "mes": 6,
          "valor": 42021.45
        },
        {
          "ano": 2019,
          "mes": 7,
          "valor": 42967.02
        },
        {
          "ano": 2019,
          "mes": 8,
          "valor": 43800.55
        },
        {
          "ano": 2019,
          "mes": 9,
          "valor": 31399.97
        },
        {
          "ano": 2019,
          "mes": 10,
          "valor": 20966.28
        },
        {
          "ano": 2019,
          "mes": 11,
          "valor": 24488.86
        },
        {
          "ano": 2019,
          "mes": 12,
          "valor": 19979.02
        },
        {
          "ano": 2020,
          "mes": 1,
          "valor": 19150.38
        },
        {
          "ano": 2020,
          "mes": 2,
          "valor": 10713.18
        },
        {
          "ano": 2020,
          "mes": 3,
          "valor": 12091.65
        },
        {
          "ano": 2020,
          "mes": 4,
          "valor": 7224.08
        },
        {
          "ano": 2020,
          "mes": 5,
          "valor": 6313.24
        },
        {
          "ano": 2020,
          "mes": 6,
          "valor": 6510.43
        },
        {
          "ano": 2020,
          "mes": 7,
          "valor": 9786.14
        },
        {
          "ano": 2020,
          "mes": 8,
          "valor": 8859.87
        },
        {
          "ano": 2020,
          "mes": 9,
          "valor": 7357.93
        },
        {
          "ano": 2020,
          "mes": 10,
          "valor": 7672.71
        },
        {
          "ano": 2020,
          "mes": 11,
          "valor": 18611.84
        },
        {
          "ano": 2020,
          "mes": 12,
          "valor": 119453.06
        },
        {
          "ano": 2021,
          "mes": 1,
          "valor": 13826.97
        },
        {
          "ano": 2021,
          "mes": 2,
          "valor": 15849.5
        },
        {
          "ano": 2021,
          "mes": 3,
          "valor": 15035.43
        },
        {
          "ano": 2021,
          "mes": 4,
          "valor": 16473.2
        }
      ],
      "gastoMedio": 27263.326666666664,
      "gastoMenor": 6313.24,
      "gastoMaior": 119453.06,
      "gastoTotal": 736109.82,
      "proposicoes": "3"
    },
    {
      "ideCadastro": "146788",
      "matricula": "236",
      "nome": "MARCELO GUILHERME DE ARO FERREIRA",
      "dias": 144,
      "sessoes": 214,
      "faltasSessoes": 24,
      "faltasDias": 17,
      "presencaDias": 0.8819444444444444,
      "presencaSessoes": 0.8878504672897196,
      "urlFoto": "https://www.camara.leg.br/internet/deputado/bandep/146788.jpg",
      "siglaUf": "MG",
      "siglaPartido": "PP",
      "nomeEleitoral": "Marcelo Aro",
      "ultimoStatus": "2019-02-01T11:45",
      "gastos": [
        {
          "ano": 2019,
          "mes": 2,
          "valor": 30618.34
        },
        {
          "ano": 2019,
          "mes": 3,
          "valor": 24553.96
        },
        {
          "ano": 2019,
          "mes": 4,
          "valor": 28151.93
        },
        {
          "ano": 2019,
          "mes": 5,
          "valor": 26465.29
        },
        {
          "ano": 2019,
          "mes": 6,
          "valor": 32709.63
        },
        {
          "ano": 2019,
          "mes": 7,
          "valor": 30353.59
        },
        {
          "ano": 2019,
          "mes": 8,
          "valor": 35714.38
        },
        {
          "ano": 2019,
          "mes": 9,
          "valor": 30820.16
        },
        {
          "ano": 2019,
          "mes": 10,
          "valor": 37961.24
        },
        {
          "ano": 2019,
          "mes": 11,
          "valor": 30877.16
        },
        {
          "ano": 2019,
          "mes": 12,
          "valor": 61116.78
        },
        {
          "ano": 2020,
          "mes": 1,
          "valor": 30182.03
        },
        {
          "ano": 2020,
          "mes": 2,
          "valor": 22952.7
        },
        {
          "ano": 2020,
          "mes": 3,
          "valor": 26500.67
        },
        {
          "ano": 2020,
          "mes": 4,
          "valor": 26426.56
        },
        {
          "ano": 2020,
          "mes": 5,
          "valor": 25453.77
        },
        {
          "ano": 2020,
          "mes": 6,
          "valor": 22508.47
        },
        {
          "ano": 2020,
          "mes": 7,
          "valor": 22053.62
        },
        {
          "ano": 2020,
          "mes": 8,
          "valor": 22447.39
        },
        {
          "ano": 2020,
          "mes": 9,
          "valor": 23024.24
        },
        {
          "ano": 2020,
          "mes": 10,
          "valor": 26324.85
        },
        {
          "ano": 2020,
          "mes": 11,
          "valor": 26167.7
        },
        {
          "ano": 2020,
          "mes": 12,
          "valor": 29025.88
        },
        {
          "ano": 2021,
          "mes": 1,
          "valor": 30221.97
        },
        {
          "ano": 2021,
          "mes": 2,
          "valor": 22534.1
        },
        {
          "ano": 2021,
          "mes": 3,
          "valor": 13539.47
        },
        {
          "ano": 2021,
          "mes": 4,
          "valor": 10888.46
        }
      ],
      "gastoMedio": 27762.753333333327,
      "gastoMenor": 10888.46,
      "gastoMaior": 61116.78,
      "gastoTotal": 749594.3399999999,
      "proposicoes": "2"
    },
    {
      "ideCadastro": "204574",
      "matricula": "80",
      "nome": "JOSE LOURENÇO BOMFIM JUNIOR",
      "dias": 144,
      "sessoes": 214,
      "faltasSessoes": 24,
      "faltasDias": 21,
      "presencaDias": 0.8541666666666666,
      "presencaSessoes": 0.8878504672897196,
      "urlFoto": "https://www.camara.leg.br/internet/deputado/bandep/204574.jpg",
      "siglaUf": "MA",
      "siglaPartido": "PL",
      "nomeEleitoral": "Junior Lourenço",
      "ultimoStatus": "2020-10-26T00:00",
      "gastos": [
        {
          "ano": 2019,
          "mes": 2,
          "valor": 19412.9
        },
        {
          "ano": 2019,
          "mes": 3,
          "valor": 21139.81
        },
        {
          "ano": 2019,
          "mes": 4,
          "valor": 18710.93
        },
        {
          "ano": 2019,
          "mes": 5,
          "valor": 23330.04
        },
        {
          "ano": 2019,
          "mes": 6,
          "valor": 17561.53
        },
        {
          "ano": 2019,
          "mes": 7,
          "valor": 33413.93
        },
        {
          "ano": 2019,
          "mes": 8,
          "valor": 59403.2
        },
        {
          "ano": 2019,
          "mes": 9,
          "valor": 50854.83
        },
        {
          "ano": 2019,
          "mes": 10,
          "valor": 37341.48
        },
        {
          "ano": 2019,
          "mes": 11,
          "valor": 35905.85
        },
        {
          "ano": 2019,
          "mes": 12,
          "valor": 140857.37
        },
        {
          "ano": 2020,
          "mes": 1,
          "valor": 46482.92
        },
        {
          "ano": 2020,
          "mes": 2,
          "valor": 53001.45
        },
        {
          "ano": 2020,
          "mes": 3,
          "valor": 33088.06
        },
        {
          "ano": 2020,
          "mes": 4,
          "valor": 25231.73
        },
        {
          "ano": 2020,
          "mes": 5,
          "valor": 27652.64
        },
        {
          "ano": 2020,
          "mes": 6,
          "valor": 50676.97
        },
        {
          "ano": 2020,
          "mes": 7,
          "valor": 0
        },
        {
          "ano": 2020,
          "mes": 8,
          "valor": 0
        },
        {
          "ano": 2020,
          "mes": 9,
          "valor": 0
        },
        {
          "ano": 2020,
          "mes": 10,
          "valor": 164.41
        },
        {
          "ano": 2020,
          "mes": 11,
          "valor": 31414.57
        },
        {
          "ano": 2020,
          "mes": 12,
          "valor": 42308.2
        },
        {
          "ano": 2021,
          "mes": 1,
          "valor": 31000
        },
        {
          "ano": 2021,
          "mes": 2,
          "valor": 25000
        },
        {
          "ano": 2021,
          "mes": 3,
          "valor": 0
        },
        {
          "ano": 2021,
          "mes": 4,
          "valor": 0
        }
      ],
      "gastoMedio": 37452.40090909091,
      "gastoMenor": 0,
      "gastoMaior": 140857.37,
      "gastoTotal": 823952.82,
      "proposicoes": "0"
    }
  ]
}