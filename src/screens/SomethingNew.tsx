import * as React from 'react';
import {Button, View, Text} from 'react-native';
import Followers from '../components/Followers';

function SomethingNew({navigation}) {
  return (
    <View>
      <Followers posts={123} followers={234} following={456} />
    </View>
  );
}

export default SomethingNew;
