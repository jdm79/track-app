import { useContext } from "react";
import { Context as AuthContext } from "../context/LocationContext";
import { navigate } from '../navigationRef';
 // pull info out of location context
    // list of locations and name property
    // pull action function to create a track too from trackcontext
export default () => {
    const { createUserDetails } = useContext(AuthContext);

    const saveUserDetails = async () => {
        await createUserDetails({ fullName, country});
        navigate('AccountScreen');
    };

    return [saveUserDetails]
};