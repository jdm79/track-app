import '../_mockLocation';
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-navigation";
import { StyleSheet } from 'react-native';
import { Text } from "react-native-elements";
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import Map from "../components/Map";

const TrackCreateScreen = () => {
    const [err, setErr] = useState(null);

    // useEffect(() => {
    //     startWatching();
    // }, []);

    const startWatching = async () => {
        try {
          const { granted } = await requestForegroundPermissionsAsync();
          await watchPositionAsync({
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
          }, (location) => {
            console.log(location)
          })

          if (!granted) {
            throw new Error('Location permission not granted');
          }
        } catch (e) {
          setErr(e);
        }
      };


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