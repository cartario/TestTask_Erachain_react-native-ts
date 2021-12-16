import React from 'react';
import {Text, View} from 'react-native';
import {ListViewProps} from '../../types';
import {styles} from './style';

const List = ({data}: ListViewProps) => {
  console.log(data);

  return (
    <View style={styles.container}>
      <Text style={styles.red}>just red</Text>
      <Text style={styles.bigBlue}>just bigBlue</Text>
      <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
      <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
    </View>
  );
};

export default List;
