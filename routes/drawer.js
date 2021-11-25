import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import NavDrawer from '../screens/Component/NavDrawer';
import Home from '../screens/Home/Home';
import AboutUs from '../screens/AboutUs/AboutUs';
import OldTestamentStack from './OldTestamentStack';
import NewTestamentStack from './NewTestamentStack';

const Drawer = createDrawerNavigator();

const Navigator = () => {
    return (
        <NavigationContainer
            theme={{
                colors: {
                    background: '#BCD2E8'
                }
            }}
        >
            <Drawer.Navigator
                initialRouteName="Home"
                drawerContent={({navigation, state}) => <NavDrawer navigation={navigation} state={state} />}
                backBehavior="history"
                screenOptions={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: '#2E5984'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    drawerActiveTintColor: '#BCD2E8',
                    drawerStyle: {
                        backgroundColor: '#2E5984',
                        width: 300,
                      },
                }}
            >
                <Drawer.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: true,
                        headerTitle: "Yoruba Bible"
                    }}
                />
                <Drawer.Screen
                    name="OldTestament"
                    component={OldTestamentStack}
                    options={{
                        headerShown: false
                    }}
                />
                <Drawer.Screen
                    name="NewTestament"
                    component={NewTestamentStack}
                    options={{
                        headerShown: false
                    }}
                />
                <Drawer.Screen
                    name="About"
                    component={AboutUs}
                    options={{
                        headerShown: true,
                        headerTitle: "Nipa Wa"
                    }}
                />
                
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;