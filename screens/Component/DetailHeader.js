import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../../styles/styles';


const DetailHeader = ({navigation, title}) => {
    
    const goBack = () => {
        navigation.pop()
    }

    return (
        <View style={styles.header}>
            <Icon name="arrow-back" size={24} color="#FFFFFF" onPress={goBack}/>
            <View style={styles.headerTextWrap}>
                <Text style={styles.mainHeaderText}> {title} </Text>
            </View>
        </View>
    )
}

export default DetailHeader