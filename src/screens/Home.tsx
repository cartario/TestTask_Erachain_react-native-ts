import * as React from 'react';
import {Button, View, Text} from 'react-native';
import lang from '../lang/ru.json';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{lang.testApp}</Text>
      <Button
        title={lang.checkQuotes}
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default HomeScreen;
