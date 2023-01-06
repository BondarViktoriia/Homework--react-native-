import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,

} from "react-native";
import { useState, useEffect } from "react";

const initialState = {
  email: "",
  password: "",
};

export const LoginScreen = ({ navigation }) => {
  console.log("navigation", navigation);
  const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);
  const [state, setState] = useState(initialState);
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 20 * 2;
      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyBoard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };
  const closeKeyboardBackdrop = () => {
    setIsShowKeyBoard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={closeKeyboardBackdrop} style={styles.form}>
      <ImageBackground
        style={styles.imageBackground}
        source={require("../assets/images/bgimage.png")}
      >
        <View style={styles.registrationFormContainer}>
          
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View
                style={{
                  ...styles.formInput,
                  marginBottom: isShowKeyBoard ? 23 : 43,
                  width: dimensions,
                }}
              >
                <Text style={styles.formTitle}>Войти</Text>
                <TextInput
                  style={styles.input}
                  value={state.email}
                  textAlign={"left"}
                  placeholder={"Адрес электронной почты"}
                  placeholderTextColor={"#BDBDBD"}
                  onFocus={() => setIsShowKeyBoard(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
                <TextInput
                  style={styles.input}
                  value={state.password}
                  textAlign={"left"}
                  placeholder={"Пароль"}
                  placeholderTextColor={"#BDBDBD"}
                  onFocus={() => setIsShowKeyBoard(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
                            <TouchableOpacity style={styles.button} onPress={keyboardHide}>
              <Text style={styles.btnText}>Войти</Text>
            </TouchableOpacity>

              <TouchableOpacity style={styles.textForm} onPress={() => navigation.navigate("Registration")}>
                <Text >Нет аккаунта? Зарегистрироваться</Text>
              </TouchableOpacity>
              </View>

            </KeyboardAvoidingView>

        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  registrationFormContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 20,
 
      
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  keyboardContainer: {
    flex: 1,
     
  },
  form: {
    
  backgroundColor:'white',
  },
  formTitle: {
    color: "#212121",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 32,
    fontFamily: "roboto",
  },
  formInput: {
    justifyContent: 'center',
    textAlign:'center'
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
    alignSelf: 'center',
    color: '#1B4371',
    fontWeight: 400,
    fontSize:16,
  },
});

export default LoginScreen;
