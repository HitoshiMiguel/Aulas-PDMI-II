import React from 'react'
import { StyleSheet, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import Titulo, { Secundario } from './src/Titulo'
import Formulario from './src/Formulario'

export default () => (
  <KeyboardAvoidingView 
    style={{ flex: 1 }} 
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  >
    <ScrollView 
      contentContainerStyle={style.Tela}
      keyboardShouldPersistTaps="handled"
    >
      
      <View style={style.ContainerTitulos}>
        <Titulo principal="Calculadora de Idade" />
        <Secundario secundario="Digite a data de nascimento para realizar o cálculo" />
      </View>

      <Formulario />
      
    </ScrollView>
  </KeyboardAvoidingView>
)

const style = StyleSheet.create({
  Tela: {
    backgroundColor: '#AC9',
    flexGrow: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    paddingVertical: 40
  },
  ContainerTitulos: {
    alignItems: 'center',
    marginBottom: 30,
  }
});