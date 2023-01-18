import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

const signup = dispatch => {
    return async ({ email, password }) => {
        // make an api request to sign up with that email and password
        try  {
            const response = await trackerApi.post('/signup', { email, password });
            console.log(response.data)
        } catch (err) {
            console.log(err.response.data)
        }

        // if we sign up, modify the state to say we're authenticated

        // if signing up fails, send error message showing this
    }
}

const signin = (dispatch) => {
    return ({ email, password }) => {
        // try to sign in
        // handle success by updating state
        
        // handle failure with error message

       
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
    { isSignedIn: false }
)