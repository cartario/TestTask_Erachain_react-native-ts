import * as React from 'react';
import {Button, View, Text} from 'react-native';

function SomethingNew({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>SomethingNew</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default SomethingNew;
