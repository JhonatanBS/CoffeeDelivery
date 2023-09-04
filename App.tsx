import React from 'react';

import { Center, NativeBaseProvider, Text } from 'native-base';

import { THEME } from './src/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <Center bg={THEME.colors.purple_dark} flex={1}>
        <Text textAlign="center" color="white">
          Hello World
        </Text>
      </Center>
    </NativeBaseProvider>
  );
}


