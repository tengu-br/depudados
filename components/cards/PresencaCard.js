import React from "react";
import { Typography } from "@material-ui/core";
import styled from 'styled-components'


const DeputadoCard = styled.div`
padding: 1em;
display:flex;
align-items:center;
`
const DeputadoAvatar = styled.div`
width: 50%;
padding-right: 0.5em;
`

const DeputadoDados = styled.div`
width: 50%;
display: flex;
flex-direction: column;
`


const PresencaCard = ({ imgSrc, titulo, nome, partido, porcentagem, faltas }) => {

  return (
    <>
      <Typography variant='h6' align='center'>
        {titulo}
      </Typography>
      <DeputadoCard>
        <DeputadoAvatar>
          <img src='https://via.placeholder.com/350x470' />
        </DeputadoAvatar>
        <DeputadoDados>
          <Typography variant='body1' align='center' style={{ paddingBottom: '2em' }}>
            {nome}<br /> {partido}
          </Typography>
          <Typography variant='h3' align='center'>
            {porcentagem}
          </Typography>
          <Typography variant='body1' align='center' style={{ paddingTop: '2em' }}>
            {faltas}
          </Typography>
        </DeputadoDados>
      </DeputadoCard>
    </>
  )

}

export default PresencaCard