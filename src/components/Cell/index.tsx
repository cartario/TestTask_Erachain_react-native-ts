import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';
import {CellProps} from '../../types';

const Cell = ({isLast, text, bold}: CellProps) => {
  return (
    <View style={isLast ? {...styles.cell, ...styles.last} : styles.cell}>
      <Text style={bold ? {...styles.text, ...styles.bold} : styles.text}>
        {text}
      </Text>
    </View>
  );
};

export default Cell;
