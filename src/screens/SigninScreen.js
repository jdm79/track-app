import React, { useContext } from "react";
import { View, StyleSheet, Text } from 'react-native';
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";
const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);
    
    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage} />

            <AuthForm 
                headerText="Sign in to your account"
                errorMessage={state.errorMessage}
                onSubmit={signin}
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



