import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";

export default () => {
    // pull info out of location context
    // list of locations and name property
    // pull action function to create a track too from trackcontext
    const { createTrack } = useContext(TrackContext);
    const { state: { locations, name }} = useContext(LocationContext);

    const saveTrack = () => {
        createTrack(name, locations);
    };

    return [saveTrack]
};