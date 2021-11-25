import React from 'react';
import { View, Text } from 'react-native'
import { styles } from '../../styles/styles';
import { BannerAd, TestIds } from '@react-native-admob/admob';

const AboutUs = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.aboutUsWrapper}>
                    <View style={styles.aboutUsHeader}>
                        <Text style={styles.aboutUsHeaderText}>NativeWare Solution</Text>
                        <Text style={styles.aboutUsHeaderBodyText}>Imọran wa wa ni kikọ sọfitiwia aṣa, oju opo wẹẹbu ati awọn solusan Ohun elo alagbeka</Text>
                    </View>
                    <View>
                        <Text style={styles.contactHeader}>Kan Si Wa</Text>
                        <Text style={styles.contactText}> <Text style={styles.contactTextBold}>Olubanisoro wa:</Text> 08038377330 </Text>
                        <Text style={styles.contactText}> <Text style={styles.contactTextBold}>Imeeli:</Text> Nativeprogram@outlook.com </Text>
                    </View>
                    <View>
                        <BannerAd size="320x50" unitId={"ca-app-pub-8645271026489270/9511232433"} />
                        {/* <BannerAd size="320x50" unitId={TestIds.BANNER} /> */}
                    </View>
                </View>
            </View>
        </View>
    )
}

export default AboutUs