import React, { useContext } from "react";
import { View, StyleSheet, Text } from 'react-native';
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AccountScreen = () => {
    const { signout } = useContext(AuthContext)
    const email = AsyncStorage.getItem(email);

    return (
        <>
                <Text style={{ fontSize: 48 }}>AccountScreen</Text>
                <Text style={{ fontSize: 48 }}>`Your email is: ${email}`</Text>
                <Spacer>
                    <Button title="Sign out" onPress={signout} />
                </Spacer>
        </>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        
    }
});

export default AccountScreen;