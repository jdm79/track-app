// import '../_mockLocation';
import React, { useContext, useCallback } from "react";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { StyleSheet } from 'react-native';
import { Text } from "react-native-elements";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext);
    const callback = useCallback(location => {
        addLocation(location, recording);
    }, [recording]);
    const [err] = useLocation(isFocused, callback);

    return (
        <SafeAreaView>
            <Text h2>Create a track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    )

};

const styles = StyleSheet.create({

});

export default withNavigationFocus(TrackCreateScreen);