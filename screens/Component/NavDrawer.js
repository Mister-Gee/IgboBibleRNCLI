import React from 'react';
import {View, Text, BackHandler, Alert, TouchableOpacity} from 'react-native';
import {styles} from '../../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const NavDrawer = ({navigation}) => {

    const closeApp = () => {
        Alert.alert('Pa Bibeli!', 'Ṣe o da ọ loju pe o fẹ pa bibeli?', [
        {
          text: 'Rara',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'Bẹẹni', onPress: () => BackHandler.exitApp() },
    ]);
      return true;
    };

    return (
        <View style={styles.navDrawer}>
            <View style={styles.navHeader}>
                <Text style={styles.navHeaderText}>Bibeli Mimo</Text>
            </View>
            <View style={styles.navView}>
                <View style={styles.navBody}>
                    <View style={styles.navLinkContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                            <View style={styles.navLinkTextWrapper}>
                                <Icon name="home" size={18} color="#FFFFFF" />
                                <Text style={styles.navLink}>Ile</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.navLinkContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('OldTestament', {screen: 'Index'})}>
                            <View style={styles.navLinkTextWrapper}>
                                <Icon name="bible" size={18} color="#FFFFFF" />
                                <Text style={styles.navLink}>Majẹmu Lailai</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.navLinkContainer, styles.navExtraLinkContainer]}>
                        <TouchableOpacity onPress={() => navigation.navigate("NewTestament", {screen: 'Index'})}>
                            <View style={styles.navLinkTextWrapper}>
                                <Icon name="bible" size={18} color="#FFFFFF" />
                                <Text style={styles.navLink}>Majẹmu Titun</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={[styles.navLinkContainer, styles.navExtraLinkContainer]}>
                        <TouchableOpacity onPress={() => navigation.navigate("About")}>
                            <View style={styles.navLinkTextWrapper}>
                                <Icon name="info-circle" size={18} color="#FFFFFF" />
                                <Text style={styles.navLink}>Nipa wa</Text>
                            </View>
                        </TouchableOpacity>
                    </View> */}
                </View>
                {/* <View style={styles.navFooter}>
                    <View style={[styles.navLinkContainer, styles.navFooterLinkContainer]}>
                        <TouchableOpacity onPress={closeApp}>
                            <View style={styles.navLinkTextWrapper}>
                                <Icon name="door-open" size={18} color="#FFFFFF" />
                                <Text style={styles.navLink}>Jade</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View> */}
            </View>
        </View>
    )
}

export default NavDrawer

