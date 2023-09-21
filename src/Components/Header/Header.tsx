import React from 'react';
import {Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {styles} from './Header.styles';

export function Header(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        },
      ]}>
      <Text style={styles.text}>Github Repo History chart</Text>
    </View>
  );
}
