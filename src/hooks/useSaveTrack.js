import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";
import { navigate } from '../navigationRef';
 // pull info out of location context
    // list of locations and name property
    // pull action function to create a track too from trackcontext
export default () => {
    const { createTrack } = useContext(TrackContext);
    const {
        state: { locations, name },
        reset
        } = useContext(LocationContext);

    const saveTrack = async () => {
        await createTrack(name, locations);
        reset();
        navigate('TrackList');
    };

    return [saveTrack]
};