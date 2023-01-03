import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import { useState,useEffect,useCallback } from "react";

import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();
const initialState = {

  email: "",
  password: "",
};

export const LoginScreen= () => {
  const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isReady, setIsReady] = useState(false);

   useEffect(() => {
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
          {/* {...styles.formInput, marginBottom:isShowKeyBoard ? 23: 43} */}
          <View style={styles.formInput}>
            <Text style={styles.formTitle}>Войти</Text>
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
            <Text style={styles.btnText}>Войти</Text>
          </TouchableOpacity>
          <Text style={styles.textForm}>Нет аккаунта? Зарегистрироваться</Text>
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

export default LoginScreen;
