import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface StylesProps {
  isDarkMode: boolean;
}

export const useStyle = (props: StylesProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: props.isDarkMode ? Colors.black : Colors.white,
      flex: 1,
      paddingHorizontal: 16,
    },
    input: {
      height: 40,
      marginVertical: 12,
      borderWidth: 1,
      padding: 10,
    },
    graph: {
      flex: 1,
    },
  });
