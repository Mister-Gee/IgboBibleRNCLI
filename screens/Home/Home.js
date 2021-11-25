import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, BackHandler, Alert, ImageBackground} from 'react-native';
import { styles } from '../../styles/styles';
import RNFS from 'react-native-fs';
import oldTestment from '../../content/oldTestament.json';
import newTestment from '../../content/newTestament.json';
import { links } from '../../content/links';

const Home = ({navigation}) => {
    const [verseOfTheDayBook, setVerseOfTheDayBook] = useState("")
    const [verseOfTheDayBody, setVerseOfTheDayBody] = useState("")


    const randomBookChapters = (obj) => {
        const keys = Object.keys(obj);
        const key = keys[ keys.length * Math.random() << 0]
        return [obj[key], key];
    }

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const currentDate = Date.now()
    const fullCurrentDate = new Date(currentDate)
    const currentDay = fullCurrentDate.getDate()

    useEffect(() => {
        const fetch = async () => {
            const randomBookChapter = randomBookChapters(links)
            let verseString
            await RNFS.readFileAssets(randomBookChapter[0]).then((res) => {
                verseString = res
              }).catch(err => {
                console.log(err.message, err.code);
              });
            
            const book = randomBookChapter[1].replace(/_/g, " ")[0].toUpperCase() + randomBookChapter[1].replace(/_/g, " ").slice(1)
            
            const verses = verseString.split(/\r?\n/)
            verses.pop()
            verses.pop()
            verses.shift()
            // if (isNaN(parseInt(verses[0].charAt(0)))){
            //     verses.shift()
            // }
            
            const randomArrayKey = getRandomInt(0, verses.length - 1)
            setVerseOfTheDayBook(book.toUpperCase())
            setVerseOfTheDayBody(verses[randomArrayKey])
        }
        fetch()
    }, [currentDay])

    useEffect(() => {
    const backAction = () => {
      Alert.alert('Pa Bibeli!', 'Ṣe o da ọ loju pe o fẹ pa bibeli?', [
        {
          text: 'Rara',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'Bẹẹni', onPress: () => BackHandler.exitApp  ()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);


    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../assets/Images/yoruba_banner.jpg")}
                resizeMode="cover"
                style={styles.bgImg}
            >
                <View style={styles.verse}>
                    <Text style={[styles.verseTitle, styles.whiteText]}>Ẹsẹ ọjọ</Text>
                    <Text style={[styles.verseBody, styles.whiteText]}>"{verseOfTheDayBody}"</Text>
                    <Text style={[styles.versePage, styles.whiteText]}>{verseOfTheDayBook}</Text>
                </View>
            </ImageBackground>
            <View style={styles.wrapper}>
                <View style={styles.books}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("OldTestament", {screen: 'Index'})}
                    >
                        <View style={styles.book}>  
                            <Text style={[styles.bookTitle, styles.whiteText]}> {oldTestment[0].testament} </Text>
                            <Text style={[styles.bookPages, styles.whiteText]}><Text style={styles.boldText}>Eye Iwe:</Text> {oldTestment[0].totalPages}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("NewTestament", {screen: 'Index'})}
                    >
                        <View style={styles.book}>  
                            <Text style={[styles.bookTitle, styles.whiteText]}>{newTestment[0].testament}</Text>
                            <Text style={[styles.bookPages, styles.whiteText]}><Text style={styles.boldText}>Eye Iwe:</Text> {newTestment[0].totalPages}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    );
}

export default Home