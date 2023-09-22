import React, {useState} from 'react';
import {TextInput, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {getMergedPulls} from '@src/Api';
import {Button} from '@src/Components';

import {styles} from './Home.styles';

export function Home(): JSX.Element {
  const [repositoryOwner, setRepositoryOwner] = useState('');
  const isDarkMode = useColorScheme() === 'dark';

  const onPress = async (): Promise<void> => {
    const data = await getMergedPulls();
    console.log(data);
  };

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={setRepositoryOwner}
          value={repositoryOwner}
          placeholder="Repository Owner"
        />
        <TextInput
          style={styles.input}
          onChangeText={setRepositoryOwner}
          value={repositoryOwner}
          placeholder="Repository Owner"
        />
        <Button text="Look for data" onPress={onPress} />
      </View>
    </View>
  );
}
