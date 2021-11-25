import React from 'react';
import { View, Text } from 'react-native'
import { styles } from '../../styles/styles';

const AboutUs = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.aboutUsWrapper}>
                    <View style={styles.aboutUsHeader}>
                        <Text style={styles.aboutUsHeaderText}>NativeWare Solution</Text>
                        <Text style={styles.aboutUsHeaderBodyText}>Ọkachamara anyị dị na ide ngwanrọ omenala, imewe weebụ yana azịza ngwa mkpanaka</Text>
                    </View>
                    <View>
                        <Text style={styles.contactHeader}>Kpọtụrụ anyị</Text>
                        <Text style={styles.contactText}> <Text style={styles.contactTextBold}>Enwere onye nkwukọrịta:</Text> 08038377330 </Text>
                        <Text style={styles.contactText}> <Text style={styles.contactTextBold}>Email:</Text> Nativeprogram@outlook.com </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default AboutUs