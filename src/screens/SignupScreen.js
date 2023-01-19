import React, { useContext } from "react";
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

// react-native-elements for the win!
// Stuff that is ready to go out of the box
// Styled buttons etc

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    
    
    return (
        <View style={styles.container}>
            <AuthForm 
                headerText="Sign up for Tracker"
                errorMessage={state.errorMessage}
                onSubmit={signup}
                submitButtonText="Sign up"
            />
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Spacer>
                     <Text style={styles.link}>Already have an account? Sign in here</Text>
                </Spacer>
            </TouchableOpacity>
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
        // marginBottom: 250 // on Android this makes the sign up form jump up too high == not good
    },
    link: {
        color: 'blue',
        textAlign: 'center'
    }
});

export default SignupScreen;