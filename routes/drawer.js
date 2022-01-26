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
                    background: '#927147'
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
                        backgroundColor: '#927147'
                    },
                    headerTintColor: '#FCF8F2',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    drawerActiveTintColor: '#FCF8F2',
                    drawerStyle: {
                        backgroundColor: '#927147',
                        width: 300,
                      },
                }}
            >
                <Drawer.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: true,
                        headerTitle: "Igbo Bible"
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
                        headerTitle: "Gbasara Anyị"
                    }}
                />
                
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;