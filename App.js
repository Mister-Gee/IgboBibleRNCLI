/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  StatusBar,
  useColorScheme,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Navigator from './routes/drawer';
import { styles } from './styles/styles';
import { BannerAd, TestIds } from '@react-native-admob/admob';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  
  return (
    <GestureHandlerRootView style={styles.handlerView}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <>
          <Navigator />
          <StatusBar style="light" backgroundColor="#2E5984" />
          <View>
            <BannerAd size="320x50" unitId={"ca-app-pub-8645271026489270/9511232433"} />
            {/* <BannerAd size="320x50" unitId={TestIds.BANNER} /> */}
          </View>
          </>
      </TouchableWithoutFeedback>
      </GestureHandlerRootView>
  );
};

export default App;
