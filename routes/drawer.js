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
                    background: '#FCF8F2'
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
                        backgroundColor: '#FCF8F2'
                    },
                    headerTintColor: '#927147',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    drawerActiveTintColor: '#927147',
                    drawerStyle: {
                        backgroundColor: '#FCF8F2',
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