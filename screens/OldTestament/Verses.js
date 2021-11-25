import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView } from 'react-native';
import {styles} from '../../styles/styles';
import RNFS from 'react-native-fs';
import {links} from '../../content/links';

const Verses = ({route}) => {
    const {book, chapter} = route.params
    const [content, setContent] = useState([])
    
    useEffect(() => {
        let name = book.toLowerCase() + " " + chapter
        name = name.replace(/ /g, "_")
        const get = () => {
            try {
                RNFS.readFileAssets(links[name]).then((res) => {
                    setContent(res.split("\r\n"))
                  }).catch(err => {
                    console.log(err.message, err.code);
                  });
                  setContent(content)
            } catch (error) {
                console.log(error)
            }
        }
        get()
    }, [book, chapter])

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <ScrollView>
                    {content.map((data, index) => (
                        data.replace(/\s/g, '') != "" && <Text style={[styles.verseText, styles.verseContent]} key={index} selectable> {data} </Text>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}

export default Verses
  