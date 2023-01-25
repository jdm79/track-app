import React, { useContext } from "react";
import { StyleSheet, View, } from 'react-native';
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

// react-native-elements for the win!
// Stuff that is ready to go out of the box
// Styled buttons etc

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm 
                headerText="Sign up for Tracker"
                errorMessage={state.errorMessage}
                onSubmit={signup}
                submitButtonText="Sign up"
            />
            <NavLink 
                routeName="Signin"
                text="Already have an account? Sign in here"
            />
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
});

export default SignupScreen;