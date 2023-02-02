import React, { useContext } from "react";
import { View, StyleSheet, Text } from 'react-native';
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = () => {
    const { signout, state } = useContext(AuthContext)

    return (
        <SafeAreaView forceInset={{ top: 'always' }} >
              
                <Spacer />
                <Spacer />
                <Spacer>
                    <Text style={styles.title}>Account</Text>
                </Spacer>
                <Spacer>
                    <Text style={styles.details}>Name:</Text>
                </Spacer>
                <Spacer>
                    <Text style={styles.details}>Email: </Text>
                </Spacer>
                <Spacer>
                    <Text style={styles.details}>Country: </Text>
                </Spacer>
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer>
                    <Button title="Sign out" onPress={signout} />
                </Spacer>
        </SafeAreaView>
    )
};

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={20} color={'white'} />
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 48
    },
    details: {
        fontSize: 20,
        marginLeft: 10
    }
});

export default AccountScreen;