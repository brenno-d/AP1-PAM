import { StyleSheet } from 'react-native';
import { fonts } from './fonts';
export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        
    },
    titulo: {
        fontSize: 32,
        fontFamily: fonts.InriaSans_bold,
        marginBottom: 20,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    containerDesc: {
        backgroundColor: '#FFC618',
        borderRadius: 6,
        borderColor: '#000000',
        borderWidth: 2,
        padding: 10,
    },
    textoDescLink: {
        fontSize: 16,
        fontFamily: fonts.InriaSans_bold,
        textDecorationLine: 'underline',
        color: '#FFFFFF',
    },
    textoDesc: {
        fontSize: 16,
        fontFamily: fonts.InriaSans_regular,
        color: '#FFFFFF',
    },
    imagem: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    },
});