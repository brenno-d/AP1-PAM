import { StyleSheet } from 'react-native';
import {fonts} from './fonts'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 55,
  },

  midSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    marginBottom: 40,
  },

  fotoPerfil: {
    width: 160,
    height: 160,
    borderRadius: 100,
    borderWidth: 3,
  },

  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  nome: {
    fontSize: 24,
    fontFamily: fonts.InriaSans_bold,
    color: '#0098FF', 
    textDecorationLine: 'underline',
  },

  informacoes: {
    fontSize: 22,
    fontFamily: fonts.InriaSans_regular,
    color: '#FFFFFF',
  },

  sectionTitles: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: fonts.InriaSans_bold,
    color: '#FFFFFF',
  },

  icons: {
    width: 45,
    height: 45,
  },

  perfisProfissionaisSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 3,
    marginBottom: 20,
    borderColor: '#000',
    borderWidth: 2,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFC618'
  },

  perfil: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },

  label: {
    fontSize: 12,
    alignSelf: 'right',
    fontFamily: fonts.InriaSans_regular,
    color: '#FFFFFF',
  },

  nomeRede: {
    fontSize: 20,
    fontFamily: fonts.InriaSans_bold,
    color: '#FFFFFF',
  },

  informacoesPessoaisSection: {
    paddingLeft: 10,
    alignItems: 'left',
    marginBottom: 15,
    borderColor: '#000',
    borderWidth: 2,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFC618'
  },

  tituloInfoPessoal: {
    fontFamily: fonts.InriaSans_bold,
    fontSize: 26,
    color: '#FFFFFF',
  },

  descInfoPessoal: {
    fontSize: 19,
    marginLeft: 10,
    fontFamily: fonts.InriaSans_regular,
    color: '#FFFFFF',
  },
});