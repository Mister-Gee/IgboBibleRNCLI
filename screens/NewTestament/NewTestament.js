import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import {styles} from '../../styles/styles';
import newTestament from '../../content/newTestament.json';


const NewTestament = ({navigation}) => {
    const [content, setContent] = useState([])
    useEffect(() => {
        setContent(newTestament[0].pages)
    }
    ,[])
    
    
    const RenderItem = ({item}) => {
        return(
            <TouchableOpacity
                onPress={() => navigation.navigate("Chapters", {
                    params: item
                })}
            >
                <View style={styles.bookCard}>
                    <Text style={styles.bookText}>{item.page}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={content}
                    renderItem={({item}) => <RenderItem item={item}/>}
                />
            </View>
        </View>
    )
}

export default NewTestament
