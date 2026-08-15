import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './Estilo'

export default (props) => {
  return(
    <>
        <Text style = {Estilo.FontTitulo}>{props.principal}</Text>
    </>
  )
}

export const Secundario =(props) => {
  return(
    <>
      <Text style = {Estilo.FontSecundario}>{props.secundario}</Text>
    </>
  )
}