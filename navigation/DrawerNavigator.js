import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import MenuPrincial from "../screens/MenuPrincipal";
import Descanso from "../screens/Descanso";
import Dieta from "../screens/dieta";
import Ejercicio from "../screens/Ejercicio"
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{headerShown:false}}>
            <Drawer.Screen name="Inicio" component={TabNavigator} />
            <Drawer.Screen name="Perfil" component={Profile} />
            
            <Drawer.Screen name="Dieta" component={Dieta} />
            
            <Drawer.Screen name="Descanso" component={Descanso} />
            
            <Drawer.Screen name="MenuPrincipal" component={MenuPrincial} />
            <Drawer.Screen name="Ejercicio" component={Ejercicio} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
