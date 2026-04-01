import { StyleSheet } from 'react-native';
import { fonts } from './fonts';
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  titulo: {
    fontSize: 32,
    fontFamily: fonts.InriaSans_bold,
    marginBottom: 20,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    fontFamily: fonts.InriaSans_bold,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  textoDesc: {
    fontSize: 16,
    fontFamily: fonts.InriaSans_regular,
    marginBottom: 10,
    color: '#FFFFFF',
  },
  containerDesc: {
    paddingLeft: 20,
    backgroundColor: '#FFC618',
    borderRadius: 6,
    borderColor: '#000',
    borderWidth: 2,
    padding: 10,
  },
  imagem: {
    width: '100%',
    height: 200,
    borderWidth: 1,
    borderColor: '#FFC618',
    marginBottom: 30,
  },
});
