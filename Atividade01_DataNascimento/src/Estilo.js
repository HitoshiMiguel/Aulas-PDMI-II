import { StyleSheet } from 'react-native'

export default StyleSheet.create({

  FontTitulo: {
    fontFamily: 'Arial',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 7
  },

  FontSecundario: {
    fontFamily: 'Arial',
    fontSize: 16,
    marginBottom: 7,
    padding: 15
  },

  container: {
    padding: 20,
  },

  linhaInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  inputPequeno: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10, 
    padding: 10,
    width: '25%',
    textAlign: 'center',
  },

  inputMaior: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    padding: 10,
    width: '40%',
    textAlign: 'center',
  },

  resultadoContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  
  textoResultado: {
    fontSize: 18,
    fontWeight: 'bold',
  }

})