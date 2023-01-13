import React, { useState } from "react";
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

// react-native-elements for the win!
// Stuff that is ready to go out of the box
// Styled buttons etc

const SignupScreen = ({ navigation }) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

const signupHandler = () => {
    console.log(email, password)
}
    
    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign up for Tracker</Text>
            </Spacer>
            {/* you could use onChangeText={setEmail} also */}
            <Input 
                label="Email" 
                value={email} 
                onChangeText={(newEmail) => setEmail(newEmail)}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input 
                label="Password" 
                value={password} 
                onChangeText={(newPassword) => setPassword(newPassword)} 
                autoCapitalize="none"    
                autoCorrect={false}
                secureTextEntry
            />
            <Spacer>
                <Button title="Sign up" onPress={signupHandler}/>
            </Spacer>
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
    container: {
        flex: 1, // this makes the container take up the whole screen
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default SignupScreen;