import React from "react";
import { View, StyleSheet, Text } from 'react-native';
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = () => {
    return (
        <View style={styles.container}>
            <AuthForm 
                headerText="Sign in to your account"
                errorMessage="" 
                onSubmit={() => {}}
                submitButtonText="Sign in"
                />
            <NavLink 
                text="Don't have an account yet? Sign up here" 
                routeName="Signup" 
                />
        </View>
    )

};

SigninScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        
    }
});

export default SigninScreen;



