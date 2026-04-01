import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DadosPessoais from '../screens/dadosPessoais';
import CompetenciasTecnicas from '../screens/competenciasTecnicas';
import ExperienciaAcademica from '../screens/experienciaAcademica';
import ExperienciaProfissional from '../screens/experienciaProfissional';
import { Image, StyleSheet } from 'react-native';
const Tab = createBottomTabNavigator();

export default function RootTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerTransparent: true,
        headerTintColor: '#FFFFFF',
        tabBarActiveTintColor: '#FDBF13',
        tabBarInactiveTintColor: '#FFF',
        tabBarStyle: {
          backgroundColor: '#000000',
        },
        headerStyle: {
          backgroundColor: '#000000',
          opacity: 0.92,
        },
      }}>
      <Tab.Screen
        name="Dados Pessoais"
        component={DadosPessoais}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/icons/dadosPessoais.png')}
              style={{
                width: size,
                height: size,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Competências técnicas"
        component={CompetenciasTecnicas}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/icons/compTecnicas.png')}
              style={{
                width: size,
                height: size,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Experiência acadêmica"
        component={ExperienciaAcademica}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/icons/expAcademica.png')}
              style={{
                width: size,
                height: size,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Experiência profissional"
        component={ExperienciaProfissional}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/icons/expProfissional.png')}
              style={{
                width: size,
                height: size,
                tintColor: color,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
