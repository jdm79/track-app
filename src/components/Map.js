import React from "react";
import { Text, StyleSheet } from 'react-native';
import MapView, { Polyline} from 'react-native-maps';

const Map = () => {
    let points = [];
    for (let i=0; i < 20; i ++) {
        points.push({
            latitude: 51.507351 + i * 0.001,
            longitude: -0.127758 + i * 0.001
        })
    } 

    return (
        <MapView 
            style={styles.map} 
            initialRegion={{
                latitude: 51.507351,
                longitude:-0.127758,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}    
        >
            <Polyline coordinates={points} strokeWidth={5} strokeColor="blue"/>
        </MapView>
    )

};

const styles = StyleSheet.create({
    map: {
        height: 300
        
    }
});

export default Map;
