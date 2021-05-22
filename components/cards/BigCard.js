import React from "react";
import { Typography } from "@material-ui/core";
import styled from 'styled-components'


const DeputadoCard = styled.div`
padding: 1em;
display:flex;
align-items:center;
`

const DeputadoDados = styled.div`
padding-left: 1em;
display: flex;
flex-direction: column;
`

const PresencaCard = ({ foto, titulo, nome, partido, porcentagem, size }) => {

  return (
    <React.Fragment>
      <Typography variant='h6' align='center' style={{ paddingTop: '1em' }}>
        {titulo}
      </Typography>
      <DeputadoCard>
        <img height='224' width='167' src={foto} />
        <DeputadoDados>
          <Typography variant='h6' align='center' style={{ paddingBottom: '2em' }}>
            {nome}<br /> {partido}
          </Typography>
          {
            size === 'small' ?
              (<Typography variant='h5' align='center'>
                {porcentagem}
              </Typography>)
              :
              (<Typography variant='h3' align='center'>
                {porcentagem}
              </Typography>)
          }
        </DeputadoDados>
      </DeputadoCard>
    </React.Fragment>
  )

}

export default PresencaCard