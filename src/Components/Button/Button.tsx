import React from 'react';
import {ActivityIndicator, Pressable, Text} from 'react-native';

import {styles} from './Button.styles';
import {ButtonProps} from './Button.types';

export function Button({text, onPress, loading}: ButtonProps): JSX.Element {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      {loading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </Pressable>
  );
}
