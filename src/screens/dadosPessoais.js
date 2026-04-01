import { View, Text, Image, Linking, ImageBackground, } from 'react-native';
import styles from '../styles/stylesDadosPessoais';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function DadosPessoais() {
  return (
    <ImageBackground
      source={require('../../assets/images/backgroundImage.png')}
      style={{ flex: 1 }}
      resizeMode="cover">
      <SafeAreaView style={styles.container} edges={['top']}>
        <View style={styles.midSection}>
          <Image
            source={require('../../assets/images/fotoPerfil.jpg')}
            style={styles.fotoPerfil}
          />
          <View style={styles.textContainer}>
            <Text
              style={[
                styles.nome,
                { color: '#ffffff', textDecorationLine: '' },
              ]}>
              Brenno Dantas
            </Text>
            <Text style={styles.informacoes}>16 anos</Text>
            <Text style={styles.informacoes}>Dev. trainee</Text>
          </View>
        </View>

        <Text style={styles.sectionTitles}>Perfis profissionais</Text>
        <View style={styles.perfisProfissionaisSection}>
          <View style={styles.perfil}>
            <Image
              source={require('../../assets/icons/github.png')}
              style={styles.icons}
            />
            <View>
              <Text
                style={styles.nome}
                onPress={() => Linking.openURL('https://github.com/brenno-d')}>
                GitHub
              </Text>
              <Text style={styles.label}>brenno-d </Text>
            </View>
          </View>

          <View style={styles.perfil}>
            <Image
              source={require('../../assets/icons/linkedin.png')}
              style={styles.icons}
            />
            <View>
              <Text
                style={styles.nome}
                onPress={() =>
                  Linking.openURL(
                    'https://www.linkedin.com/in/brenno-viana-262353367/'
                  )
                }>
                LinkedIn
              </Text>
              <Text style={styles.label}>Brenno Viana </Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitles}>Informações pessoais</Text>
        <View style={styles.informacoesPessoaisSection}>
          <Text style={styles.tituloInfoPessoal}>Residência:</Text>
          <Text style={styles.descInfoPessoal}> — Itanhaém - SP</Text>
          <Text style={styles.tituloInfoPessoal}>Informações de contato:</Text>
          <Text style={styles.descInfoPessoal}>
            Email: brennoviana019@gmail.com
          </Text>
          <Text style={styles.descInfoPessoal}>Telefone: 13 98218-9760</Text>
          <Text style={styles.tituloInfoPessoal}>Site pessoal:</Text>
          <Text style={styles.descInfoPessoal}>brennodv.me</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
