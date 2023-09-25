import React, {useState} from 'react';
import {TextInput, useColorScheme, View} from 'react-native';

import {getMergedPulls} from '@src/Api';
import {Button, Graph} from '@src/Components';

import {useStyle} from './Home.styles';

export function Home(): JSX.Element {
  const [repositoryOwner, setRepositoryOwner] = useState('');
  const isDarkMode = useColorScheme() === 'dark';
  const styles = useStyle({isDarkMode});

  const onPress = async (): Promise<void> => {
    const data = await getMergedPulls();
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1 / 3,
        }}>
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
      <View style={styles.graph}>
        <Graph.Bar />
      </View>
    </View>
  );
}
