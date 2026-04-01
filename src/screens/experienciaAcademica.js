import { View, Text, Image, ScrollView, ImageBackground, Linking, TouchableOpacity } from 'react-native';
import styles from '../styles/stylesExpAcademica';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function ExperienciaAcademica() {
  return (
    <ImageBackground
      source={require('../../assets/images/backgroundImage.png')}
      style={{ flex: 1 }}
      resizeMode="cover">
      <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        <ScrollView style={styles.container}>
          <Text style={[styles.titulo, { marginTop: 20 }]}>Histórico acadêmico </Text>
          <View style={styles.containerDesc}>
            <Text style={styles.subtitulo}>
              {' '}
              Ensino médio integrado ao técnico em desenvolvimento de sistemas
            </Text>
            <Text style={styles.textoDesc}>
              — ETEC de Itanhaém 2025-2026 (cursando)
            </Text>
            <Text style={styles.subtitulo}>   Disciplinas relevantes</Text>
            <Text style={styles.textoDesc}>
              • Técnica de programação e algoritmos {'\n'}
              • Desenvolvimento Web{'\n'}
              • Banco de dados{'\n'}
              • análise e projeto de sistemas{'\n'}
              • programação mobile{'\n'}
            </Text>
            <Text style={styles.subtitulo}>
              {' '}
              Cursos complementares
            </Text>
            <Text style={styles.textoDesc}>
              • Curso de inglês 120 horas centro de língua e literatura de Itanhaém {'\n'}
              • Certificado de fluência B2 em inglês {'\n'}
              • Fluência A1 em Alemão
            </Text>
          </View>
          <Text style={styles.titulo}>Projetos acadêmicos</Text>
          <View style={styles.containerDesc}>
            <TouchableOpacity onPress={() => Linking.openURL('https://github.com/brenno-d/Projeto-SocialTec')}>
            <Text style={[styles.subtitulo, { textDecorationLine: 'underline' }]}>
              {' '}
              Projeto SocialTec
            </Text>
            <Text style={[styles.textoDesc,{textDecorationLine: 'underline'}]} >
              Desenvolvimento de um sistema web voltado a um projeto social, com o objetivo  de conectar ONGs e pessoas que querem ajudar.
            </Text>
            </TouchableOpacity>
          </View>
          <Image source={require('../../assets/images/socialTec.png')} style={styles.imagem} />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
