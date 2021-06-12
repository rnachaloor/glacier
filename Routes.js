import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { LoginStackScreen } from "./screens/LoginScreen";
import App from "./App";
import { AuthContext } from "./AuthProvider";
import auth from "@react-native-firebase/auth";

const Routes = () => {

    const {user, setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if(initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if(initializing) return null;

    /*if (user) {
        return (
            <NavigationContainer>
                <App/>
            </NavigationContainer>
        )
    } else {
        return (
            <NavigationContainer>
                <LoginStackScreen/>
            </NavigationContainer>
        )
    }*/

        return (
            <NavigationContainer>
                { user ? <App/> : <LoginStackScreen/> }
            </NavigationContainer>
        );

}
export default Routes;