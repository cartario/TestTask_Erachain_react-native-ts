import * as React from 'react';
import {Button, View, Text} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Это тестовое приложение LoremIpsum</Text>
      <Button
        title="Проверить котировки"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default HomeScreen;
