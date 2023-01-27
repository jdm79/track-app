import React from "react";
import { SafeAreaView } from "react-navigation";
import { StyleSheet } from 'react-native';
import { Text } from "react-native-elements";
import Map from "../components/Map";

const TrackCreateScreen = () => {
    return (
        <SafeAreaView>
            <Text h2>Create a track</Text>
            <Map />
        </SafeAreaView>
    )

};

const styles = StyleSheet.create({

});

export default TrackCreateScreen;