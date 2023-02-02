import React, { useContext, useCallback } from "react";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { StyleSheet } from 'react-native';
import { Text } from "react-native-elements";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import Spacer from "../components/Spacer";
import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext);
    const callback = useCallback(location => {
        addLocation(location, recording);
    }, 
    [recording]);
    const [err] = useLocation(isFocused, callback);

    return (
        <SafeAreaView>
            {/* <Text h2>Create a track</Text> */}
            <Spacer />
            <Spacer />
            <Spacer>
                <Text style={styles.title} >Mappy map</Text>
            </Spacer>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    )

};

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={20} color={'white'} />
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 48
    }
});

export default withNavigationFocus(TrackCreateScreen);