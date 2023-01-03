import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import LoginScreen from './assets/Screens/LoginScreen';
import RegistrationForm from './assets/Screens/RegistrationScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
          <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('./assets/images/bgimage.png')}
        >
          <MainStack.Navigator>
            <MainStack.Screen name="RegistrationForm" component={RegistrationForm} />
           <MainStack.Screen name="LoginScreen" component={LoginScreen} />

          </MainStack.Navigator>
       
       <LoginScreen/>
    
   </ImageBackground>
         
        

    
    </View>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
    imageBackground: {
    flex: 1,
    resizeMode: "cover",
      justifyContent: "center",

  },
});
