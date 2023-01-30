// import '../_mockLocation';
import React, { useContext } from "react";
import { SafeAreaView } from "react-navigation";
import { StyleSheet } from 'react-native';
import { Text } from "react-native-elements";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = () => {
    const { addLocation } = useContext(LocationContext);

    const [err] = useLocation(addLocation);

    return (
        <SafeAreaView>
            <Text h2>Create a track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    )

};

const styles = StyleSheet.create({

});

export default TrackCreateScreen;