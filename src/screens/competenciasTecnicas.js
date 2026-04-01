import { View, Image, Text, ScrollView, ImageBackground } from 'react-native';
import styles from '../styles/stylesCompTecnicas';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function CompetenciasTecnicas() {
  return (
    <ImageBackground
      source={require('../../assets/images/backgroundImage.png')}
      style={{ flex: 1 }}
      resizeMode="cover">
      <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        <ScrollView style={styles.container}>
          <Text style={[styles.titulo, { marginTop: 30 }]}>Resumo técnico</Text>
          <View style={styles.containerDesc}>

            <Text style={styles.textoDesc}>
              {' '}
              Estudante e desenvolvedor fullstack com experiência e projetos em
              diversas linguagens e frameworks com uma aptidão maior para para
              desenvolvimento Backend.{' '}
            </Text>
          </View>
          <Text style={[styles.titulo, { marginTop: 30 }]}>
            Linguagens/frameworks que mais uso
          </Text>
          <View style={styles.iconGrid}>
            <Image
              source={require('../../assets/icons/c#.png')}
              style={styles.icons}
            />
            <Image
              source={require('../../assets/icons/HTML.png')}
              style={styles.icons}
            />
            <Image
              source={require('../../assets/icons/CSS.png')}
              style={styles.icons}
            />
            <Image
              source={require('../../assets/icons/javascript.png')}
              style={styles.icons}
            />
            <Image
              source={require('../../assets/icons/PHP.png')}
              style={styles.icons}
            />
            <Image
              source={require('../../assets/icons/reactNative.png')}
              style={styles.icons}
            />
            <Image
              source={require('../../assets/icons/jquery.png')}
              style={styles.icons}
            />
            <Image
              source={require('../../assets/icons/bootstrap.png')}
              style={styles.icons}
            />
          </View>
          <Text style={styles.titulo}>Ferramentas que utilizo</Text>
          <View style={[styles.containerDesc, { marginBottom: 40 }]}>
            <View style={styles.gridFerramentas}>
              <Image
                source={require('../../assets/icons/VSCode.png')}
                style={styles.icons}
              />
              <Text style={styles.textoFerramenta}>
                VS Code — Desenvolvimento web e mobile
              </Text>
            </View>

            <View style={styles.gridFerramentas}>
              <Image
                source={require('../../assets/icons/VisualStudio.png')}
                style={styles.icons}
              />
              <Text style={styles.textoFerramenta}>
                Visual Studio — Desenvolvimento Desktop com C#
              </Text>
            </View>

            <View style={styles.gridFerramentas}>
              <Image
                source={require('../../assets/icons/figma.png')}
                style={styles.icons}
              />
              <Text style={styles.textoFerramenta}>
                Figma — Prototipação e design de interfaces
              </Text>
            </View>

            <View style={styles.gridFerramentas}>
              <Image
                source={require('../../assets/icons/git.png')}
                style={styles.icons}
              />
              <Text style={styles.textoFerramenta}>
                Git — Versionamento de aplicações
              </Text>
            </View>
            <View style={styles.gridFerramentas}>
              <Image
                source={require('../../assets/icons/mySqlWorkbench.png')}
                style={styles.icons}
              />
              <Text style={styles.textoFerramenta}>
                MySQL Workbench — Gerenciamento de banco de dados
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
