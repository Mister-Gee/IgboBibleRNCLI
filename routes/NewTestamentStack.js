import { createStackNavigator } from '@react-navigation/stack';
import Header from '../screens/Component/Header';
import DetailHeader from '../screens/Component/DetailHeader';
import React from 'react';
import NewTestament from '../screens/NewTestament/NewTestament';
import Chapters from '../screens/NewTestament/Chapters';
import Verses from '../screens/NewTestament/Verses';

const Stack = createStackNavigator();
const NewTestamentStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Index" 
                component={NewTestament} 
                options = {{
                header: ({navigation}) => <Header navigation={navigation} title="Majẹmu Titun" />
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

export default NewTestamentStack;