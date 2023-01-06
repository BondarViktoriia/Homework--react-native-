import { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Image, Button } from "react-native";

const DefaultScreen = ({ route, navigation }) => {
   const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("posts", posts);
  return (
    <View style={styles.container}>
       <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={{marginBottom:10, justifyContent:'center',alignItems:'center'}}>
            <Image
              source={{ uri: item.photo }}
              style={{ marginHorizontal: 15, height: 240 ,width: 340}}
            />
          </View>
        )}
      />
      <Button title="go to map" onPress={() => navigation.navigate("Map")} />
      <Button
        title="go to Comments"
        onPress={() => navigation.navigate("Comments")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default DefaultScreen;