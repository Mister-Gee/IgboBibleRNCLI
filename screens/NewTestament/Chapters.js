import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import {styles} from '../../styles/styles';


const Chapters = ({navigation, route}) => {
    const [chaptersText, setChaptersText] = useState([])
    const {chapters} = route.params.params
    const {params} = route.params
    
    useEffect(() => {
        const chaptersArray = []
        for(let i = 1; i <= chapters; i++){
            chaptersArray.push(i)
        }
        setChaptersText(chaptersArray)
    }, [chapters])
    
    const RenderItem = ({item}) => {
        return(
            <TouchableOpacity
                onPress={() => navigation.push("Verses", {
                    book: params.page,
                    chapter: item,
                })}
            >
                <View style={styles.chapterCard}>
                    <Text style={styles.chapterText}>{item}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.chapterContainer}>
                    <FlatList
                        // nestedScrollEnabled
                        numColumns={3}
                        keyExtractor={(item) => item}
                        data={chaptersText}
                        renderItem={({item}) => <RenderItem item={item}/>}
                    />
                </View>
                
            </View>
        </View>
    )
}

export default Chapters
