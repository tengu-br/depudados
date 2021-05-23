import React from "react";
import { Typography } from "@material-ui/core";
import styled from 'styled-components'


const DeputadoCard = styled.div`
padding: 1em;
display:flex;
align-items:center;
place-content: center;
`

const DeputadoDados = styled.div`
padding-left: 1em;
display: flex;
flex-direction: column;
`

const GastosCard = ({ titulo, dado }) => {

  return (
    <React.Fragment>
      <Typography variant='h6' align='center' style={{ paddingTop: '1em' }}>
        {titulo}
      </Typography>
      <Typography variant='h4' align='center' style={{ padding: '0.7em' }}>
        {dado}
      </Typography>
    </React.Fragment>
  )

}

export default GastosCard