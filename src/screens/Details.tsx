import * as React from 'react';
import {Button, View, Text} from 'react-native';
import List from '../components/List';

function Details({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <List />
    </View>
  );
}

export default Details;
