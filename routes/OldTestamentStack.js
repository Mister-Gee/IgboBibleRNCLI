import { createStackNavigator } from '@react-navigation/stack';
import Header from '../screens/Component/Header';
import DetailHeader from '../screens/Component/DetailHeader';
import React from 'react';
import OldTestament from '../screens/OldTestament/OldTestament';
import Chapters from '../screens/OldTestament/Chapters';
import Verses from '../screens/OldTestament/Verses';


const Stack = createStackNavigator();
const OldTestamentStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Index" 
                component={OldTestament} 
                options = {{
                header: ({navigation}) => <Header navigation={navigation} title="Majẹmu Lailai" />
            }}
            />
            <Stack.Screen 
                name="Chapters" 
                component={Chapters} 
                options = {{
                headerShown: true,
                header: ({navigation, route}) => <DetailHeader navigation={navigation} title={route.params.params.page} />
            }}
            />
            <Stack.Screen 
                name="Verses" 
                component={Verses} 
                options = {{
                headerShown: true,
                header: ({navigation, route}) => <DetailHeader navigation={navigation} title={route.params.book + " " + route.params.chapter} />
            }}
            />
        </Stack.Navigator>
    )
}

export default OldTestamentStack;