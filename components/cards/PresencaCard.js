import React from "react";
import { Typography } from "@material-ui/core";
import styled from 'styled-components'


const DeputadoCard = styled.div`
padding: 1em;
display:flex;
align-items:center;
`
const DeputadoAvatar = styled.div`

`

const DeputadoDados = styled.div`
padding-left: 1em;
display: flex;
flex-direction: column;
`

const PresencaCard = ({ imgSrc, titulo, nome, partido, porcentagem, faltas }) => {

  return (
    <React.Fragment>
      <Typography variant='h6' align='center' style={{ paddingTop: '1em' }}>
        {titulo}
      </Typography>
      <DeputadoCard>
        <DeputadoAvatar>
          <img height='224' width='167' src='https://via.placeholder.com/167x224' />
        </DeputadoAvatar>
        <DeputadoDados>
          <Typography variant='h6' align='center' style={{ paddingBottom: '2em' }}>
            {nome}<br /> {partido}
          </Typography>
          <Typography variant='h3' align='center'>
            {porcentagem}
          </Typography>
        </DeputadoDados>
      </DeputadoCard>
    </React.Fragment>
  )

}

export default PresencaCard