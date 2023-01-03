import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import LoginScreen from './assets/Screens/LoginScreen';
import RegistrationForm from './assets/Screens/RegistrationScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('./assets/images/bgimage.png')}
      >
        {/* <RegistrationForm/> */}
       <LoginScreen/>
    
   </ImageBackground>
         
        
      <StatusBar style="auto" />
    
    </View>
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
