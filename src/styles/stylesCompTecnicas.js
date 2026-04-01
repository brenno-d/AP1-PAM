import { StyleSheet } from 'react-native';
import { fonts } from './fonts';
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 20,
    marginTop: 40,
  },
  containerDesc: {
    borderColor: '#000',
    borderWidth: 2,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFC618',
  },
  titulo: {
    fontSize: 28,
    fontFamily: fonts.InriaSans_bold,
    marginBottom: 20,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  textoDesc: {
    fontSize: 16,
    fontFamily: fonts.InriaSans_regular,
    color: '#FFFFFF',
  },
  textoFerramenta: {
    fontSize: 16,
    fontFamily: fonts.InriaSans_regular,
    color: '#FFFFFF',
    flex: 1,
    flexShrink: 1,
  },
  iconGrid: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  icons: {
    width: 55,
    height: 55,
  },
  gridFerramentas: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
});
