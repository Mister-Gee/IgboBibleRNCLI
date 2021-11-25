import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from '../../styles/styles';


const Header = ({navigation, title}) => {
    
    const openMenu = () => {
        navigation.openDrawer()
    }

    return (
        <View style={styles.header}>
            <Icon name="menu" size={24} color="#FFFFFF" onPress={openMenu} style={styles.navBar}/>
            <View style={styles.headerTextWrap}>
                <Text style={styles.mainHeaderText}> {title} </Text>
            </View>
        </View>
    )
}

export default Header
