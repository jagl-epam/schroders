import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';

import {BarProps, TooltipProps} from './Bar.props';
import {styles} from './Bar.styles';

export const Bar: FC<BarProps> = ({data}) => {
  const values = data.map(d => d.value);
  const maxValue = Math.max(...values);

  return (
    <View style={styles.container}>
      <BarChart
        barWidth={22}
        barBorderRadius={4}
        showYAxisIndices
        noOfSections={4}
        maxValue={maxValue + 50}
        data={data}
        isAnimated
        yAxisThickness={0}
        xAxisThickness={0}
        renderTooltip={(item: TooltipProps) => {
          return (
            <View style={styles.tooltip}>
              <Text>{item.value}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};
