import { View, Text, Image, ImageBackground, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/stylesExpProfissional';

export default function ExperienciaProfissional() {
    return (
        <ImageBackground
            source={require('../../assets/images/backgroundImage.png')}
            style={{ flex: 1 }}
            resizeMode="cover">
            <SafeAreaView style={styles.container} edges={['top']}>
                <ScrollView>
                    <Text style={[styles.titulo, {marginTop: 90}]}>Experiência Profissional</Text>

                    <View style={styles.containerDesc}>
                        <Text style={styles.textoDesc}>
                            —Desenvolvimento de aplicações web responsivas (HTML, CSS, Javascript e frameworks){'\n'}
                            —Desenvolvimento desktop com C#{'\n'}
                            —Trabalho em equipe usando metodologias ageis
                        </Text>
                    </View>

                    <Text style={[styles.titulo, { marginTop: 20 }]}>Projetos pessoais</Text>

                    <View style={styles.containerDesc}>
                        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/brenno-d/Landpage-Arnold-Schwarzenegger')}>
                            <Text style={styles.textoDescLink}>
                                {'  '}Landpage enciclopédia de fisiculturismo, Arnold Schwaznegger, feita com Bootstrap, HTML, CSS e Javascript
                            </Text>
                        </TouchableOpacity>
                        <Image source={require('../../assets/images/landPage.png')} style={[styles.imagem]} />
                    </View>

                    <View style={[styles.containerDesc, { marginTop: 20, marginBottom: 10 }]}>
                        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/brenno-d/Autoclicker-visualforms')}>
                            <Text style={styles.textoDescLink}>
                                {'  '}   Auto clicker criado usando C# e visual studio com o objetivo de automatizar tarefas repetitivas de click
                            </Text>
                        </TouchableOpacity>
                        <Image source={require('../../assets/images/AutoClick.png')} style={[styles.imagem]} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
}
