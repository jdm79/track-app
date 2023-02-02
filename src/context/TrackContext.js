import createDataContext from './createDataContext';
import TrackerApi from '../api/tracker';

const trackReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_tracks': 
            return action.payload;
        // case 'create_track': 
        //     return { ...state, currentLocation: action.payload };
        default:
            return state;
    }
};

const fetchTracks = dispatch => async () => {
    const response = await TrackerApi.get('/tracks');
    dispatch({ type: 'fetch_tracks', payload: response. data })
};
const createTrack = dispatch => async (name, locations) => {
    await TrackerApi.post('/tracks', { name, locations });
    console.log(name, locations.length)
};


export const { Context, Provider } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    { tracks: [] }
);
