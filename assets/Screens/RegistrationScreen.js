import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions
} from "react-native";
import { useState,useEffect,useCallback } from "react";

import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();
const initialState = {
  login: "",
  email: "",
  password: "",
};

export const RegistrationForm = () => {
  const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isReady, setIsReady] = useState(false);
    const [dimensions,setDimensions]= useState(Dimensions.get('window').width - 20*2)


  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get('window').width -20 *2
      setDimensions(width)
    }
    Dimensions.addEventListener('change',onChange)
    async function prepare() {
      try {
       await Font.loadAsync({
    'roboto':require('../fonts/Roboto-Regular.ttf')
  })
      } catch (error) {
        console.warn(error)
      } finally {
        setIsReady(true)
    }
    }
    prepare()
      return () => {
      Dimensions.removeEventListener('change', onChange);
    }
  }, [])

  const keyboardHide = () => {
    setIsShowKeyBoard(false);
    Keyboard.dismiss()
    console.log(state)
    setState(initialState)
  }
  const closeKeyboardBackdrop = () => {
       setIsShowKeyBoard(false);
    Keyboard.dismiss()
  }
    const onLayoutRootView = useCallback(async () => {
      
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }


  return (
    <TouchableWithoutFeedback onPress={closeKeyboardBackdrop}>
       <View style={styles.registrationFormContainer} onLayout={onLayoutRootView}>
      <View style={styles.form}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
         
          <View style= {{...styles.formInput, marginBottom:isShowKeyBoard ? 23: 43,}}>
            <Text style={styles.formTitle}>Регистрация</Text>
            <TextInput
                style={styles.input}
                value={state.login}
              textAlign={"left"}
              placeholder={"Логин"}
              placeholderTextColor={"#BDBDBD"}
                onFocus={() => setIsShowKeyBoard(true)}
                onChangeText={(value)=>setState((prevState)=>({...prevState,login:value}))}
            />
            <TextInput
                style={styles.input}
                value={state.email}
              textAlign={"left"}
              placeholder={"Адрес электронной почты"}
              placeholderTextColor={"#BDBDBD"}
                onFocus={() => setIsShowKeyBoard(true)}
            onChangeText={(value)=>setState((prevState)=>({...prevState,email:value}))}

            />
            <TextInput
                style={styles.input}
                value={state.password}
              textAlign={"left"}
              placeholder={"Пароль"}
              placeholderTextColor={"#BDBDBD"}
                onFocus={() => setIsShowKeyBoard(true)}
            onChangeText={(value)=>setState((prevState)=>({...prevState,password:value}))}

            />
          </View>
        </KeyboardAvoidingView>
        <View>
          <TouchableOpacity style={styles.button} onPress={keyboardHide }> 
            <Text style={styles.btnText}>Зарегистрироваться</Text>
          </TouchableOpacity>
          <Text style={styles.textForm}>Уже есть аккаунт? Войти</Text>
        </View>
      </View>
    </View>
   </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  registrationFormContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  keyboardContainer: {
    flex: 1,
  },
  form: {
    backgroundColor: "white",
  },
  formTitle: {
    color: "#212121",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 32,
   
  },
  formInput: {
    
  },

  input: {
    borderWidth: 1,
    height: 50,
    backgroundColor: "#F6F6F6",
    marginHorizontal: 16,
    borderColor: "#E8E8E8",
    padding: 16,
    color: "#212121",
    borderRadius: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 43,
    borderRadius: 100,
    height: 51,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  btnText: {
    color: "#FFFFFF",
  },
  textForm: {
    color: "#1B4371",
    textAlign: "center",
    marginBottom: 45,
  },
});

export default RegistrationForm;
