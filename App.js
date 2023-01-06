import { StyleSheet, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { useState, useEffect, useCallback } from "react";
import { useRoute } from "./router";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();



export default function App() {
  const [isReady, setIsReady] = useState(false);
  const routing = useRoute({});

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          roboto: require("./assets/fonts/Roboto-Regular.ttf"),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }
  return (
    <NavigationContainer>
      <View style={styles.container} onLayout={onLayoutRootView}>
        {routing}
      </View>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
