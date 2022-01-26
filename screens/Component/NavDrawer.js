import React from 'react';
import {View, Text, BackHandler, Alert, TouchableOpacity} from 'react-native';
import {styles} from '../../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const NavDrawer = ({navigation}) => {

    const closeApp = () => {
        Alert.alert('Mechie Akwụkwọ Nsọ!', 'O doro gị anya na ị chọrọ imechi akwụkwọ nsọ?', [
        {
          text: 'Mba',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'Ee', onPress: () => BackHandler.exitApp() },
    ]);
      return true;
    };

    return (
        <View style={styles.navDrawer}>
            <View style={styles.navHeader}>
                <Text style={styles.navHeaderText}>Bible Nsọ</Text>
            </View>
            <View style={styles.navView}>
                <View style={styles.navBody}>
                    <View style={styles.navLinkContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                            <View style={styles.navLinkTextWrapper}>
                                <Icon name="home" size={18} color="#FCF8F2" />
                                <Text style={styles.navLink}>Ụlọ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.navLinkContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('OldTestament', {screen: 'Index'})}>
                            <View style={styles.navLinkTextWrapper}>
                                <Icon name="bible" size={18} color="#FCF8F2" />
                                <Text style={styles.navLink}>Agba Ochie</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.navLinkContainer, styles.navExtraLinkContainer]}>
                        <TouchableOpacity onPress={() => navigation.navigate("NewTestament", {screen: 'Index'})}>
                            <View style={styles.navLinkTextWrapper}>
                                <Icon name="bible" size={18} color="#FCF8F2" />
                                <Text style={styles.navLink}>Agba Ọhụrụ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={[styles.navLinkContainer, styles.navExtraLinkContainer]}>
                        <TouchableOpacity onPress={() => navigation.navigate("About")}>
                            <View style={styles.navLinkTextWrapper}>
                                <Icon name="info-circle" size={18} color="#FCF8F2" />
                                <Text style={styles.navLink}>Gbasara Anyị</Text>
                            </View>
                        </TouchableOpacity>
                    </View> */}
                </View>
                {/* <View style={styles.navFooter}>
                    <View style={[styles.navLinkContainer, styles.navFooterLinkContainer]}>
                        <TouchableOpacity onPress={closeApp}>
                            <View style={styles.navLinkTextWrapper}>
                                <Icon name="door-open" size={18} color="#FCF8F2" />
                                <Text style={styles.navLink}>Mechie</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View> */}
            </View>
        </View>
    )
}

export default NavDrawer

