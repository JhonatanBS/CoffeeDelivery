import React, { useState } from 'react';

import { NativeBaseProvider, StatusBar } from 'native-base';

import { Roboto_400Regular, Roboto_700Bold, useFonts} from "@expo-google-fonts/roboto";
import { Baloo2_700Bold} from "@expo-google-fonts/baloo-2";

import { THEME } from './src/theme';
import { Splash } from './src/screens/Splash';
import { Home } from './src/screens/Home';

import { preventAutoHideAsync } from "expo-splash-screen";

preventAutoHideAsync();

export default function App() {
  const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold,Baloo2_700Bold});
  const [splashComplete, setSplashComplete] = useState(false);

  return (
    <NativeBaseProvider theme={THEME}>

      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {splashComplete && fontsLoaded ? < Home /> : <Splash onComplete={setSplashComplete}/>}
    </NativeBaseProvider>
  );
}


