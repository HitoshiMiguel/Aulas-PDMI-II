import React, { useState } from 'react'
import { Text, TextInput, Button, View } from 'react-native'
import Estilo from './Estilo'

export default function Formulario() {
  const [dia, setDia] = useState('')
  const [mes, setMes] = useState('')
  const [ano, setAno] = useState('')

  const [resultado, setResultado] = useState(null);

  const calcularIdade = () => {
    const diaNum = parseInt(dia, 10)
    const mesNum = parseInt(mes, 10)
    const anoNum = parseInt(ano, 10)

    if (isNaN(diaNum) || isNaN(mesNum) || isNaN(anoNum)) {
      alert("Digite em todos os campos.")
      return;
    }
  
  const dataNascimento = new Date(anoNum, mesNum - 1, diaNum)
  const hoje = new Date()

  const diferencaEmMilissegundos = hoje - dataNascimento
  const milissegundosEmUmDia = 1000 * 60 * 60 * 24
  const totalDias = Math.floor(diferencaEmMilissegundos / milissegundosEmUmDia)

  if  (totalDias < 0) {
    alert ("Digite uma data válida.")
    return;
  }

    const anos = Math.floor(totalDias / 365.25 )
    const restosAnos = totalDias % 365.25
    const meses = Math.floor(restosAnos / 30.44)
    const dias = Math.floor(restosAnos % 30.44)

    setResultado({ anos, meses, dias });
};

return (
  <View style = {Estilo.container}>
  <View style = {Estilo.linhaInputs} >
    <TextInput
      style = {Estilo.inputPequeno}
      placeholder = "DD"
      keyboardType = "numeric"
      maxLength = { 2 }
      onChangeText = { setDia }
      value = { dia }
  />

  <TextInput
      style = {Estilo.inputPequeno}
      placeholder = "MM"
      keyboardType = "numeric"
      maxLength = { 2 }
      onChangeText = { setMes }
      value = { mes }
  />

  <TextInput
      style = {Estilo.inputMaior}
      placeholder = "AAAA"
      keyboardType = "numeric"
      maxLength = { 4 }
      onChangeText = { setAno }
      value = { ano }
  />
  </View>

  <Button title = "Calcular" onPress = { calcularIdade } />

  {resultado && (
    <View style = { Estilo.resultadoContainer }>
      <Text style = { Estilo.textoResultado }>Anos: { resultado.anos}</Text>
      <Text style = { Estilo.textoResultado }>Meses: { resultado.meses}</Text>
      <Text style = { Estilo.textoResultado }>Dias: { resultado.dias}</Text>
    </View>
  )}
  </View>
)

}
