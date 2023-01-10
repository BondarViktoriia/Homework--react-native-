import { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Image, Button } from "react-native";
import { useDispatch } from "react-redux";
import { authSignOutUser } from "../../redux/auth/authOperations";
import db from "../../firebase/config";

const DefaultScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(authSignOutUser());
  };
  const getAllPosts = async () => {
    await db
      .firestore()
      .collection("posts")
      .onSnapshot((data) =>
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <View style={styles.container}>
      <Button title="singOut" onPress={signOut} />
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item.photo }}
              style={{ marginHorizontal: 15, height: 240, width: 340 }}
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
