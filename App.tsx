import React from 'react';

import { NativeBaseProvider  } from 'native-base';

import { Roboto_400Regular, Roboto_700Bold, useFonts} from "@expo-google-fonts/roboto";
import { Baloo2_700Bold} from "@expo-google-fonts/baloo-2";

import { THEME } from './src/theme';

export default function App() {
  const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold,Baloo2_700Bold})
  return (
    <NativeBaseProvider theme={THEME}>
      
    </NativeBaseProvider>
  );
}


