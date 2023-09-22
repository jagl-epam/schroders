import React from 'react';
import {Pressable, Text} from 'react-native';

import {styles} from './Button.styles';
import {ButtonProps} from './Button.types';

export function Button({text, onPress}: ButtonProps): JSX.Element {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}
