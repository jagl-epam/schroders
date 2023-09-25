import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Home} from '@src/Screens';
import {Header} from '@src/Components';

interface StylesProps {
  isDarkMode: boolean;
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = useStyle({isDarkMode});

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? Colors.darker : Colors.lighter}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}>
        <Header />
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

const useStyle = (props: StylesProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: props.isDarkMode ? Colors.black : Colors.white,
      flex: 1,
    },
    contentContainerStyle: {
      flex: 1,
    },
  });
