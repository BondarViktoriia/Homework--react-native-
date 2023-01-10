
import { Text, View, StyleSheet, Button } from "react-native";
import { authSignOutUser } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";

export const ProfileScreen = () => {
    const dispatch = useDispatch();
    const signOut = () => {
       dispatch(authSignOutUser())
   }
    return (
        <View style={styles.container}>
              <Button title="singOut" onPress={signOut} />
        </View>
       )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    }
})



export default ProfileScreen;