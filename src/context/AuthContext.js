import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'signin': // this works for sign in and sign out
            return { errorMessage: '', token: action.payload }
        default: 
            return state;
    }
};

const signup = dispatch => async ({ email, password }) => {
        // make an api request to sign up with that email and password
        try  {
            const response = await trackerApi.post('/signup', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token })

            // navigate to main flow
            navigate('TrackList');
        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
        }

        // if we sign up, modify the state to say we're authenticated

        // if signing up fails, send error message showing this
}


const signin = dispatch => async ({ email, password }) => {
        // try to sign in
        // handle success by updating state
        try  {
            const response = await trackerApi.post('/signin', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token })

            // navigate to main flow
            navigate('TrackList');
        } catch (err) {
            // handle failure with error message
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' })
        }        
}


const signout = (dispatch) => {
    return () => {
        // try to sign out
   
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup},
    { token: null, errorMessage: '' }
)