import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';
import {FollowersProps} from '../../types';

const Followers = ({posts, followers, following}: FollowersProps) => {
  return (
    <View style={styles.wrap}>
      <View style={styles.avatar}>
        <View style={styles.changeAvatarBtn}></View>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.item}>
          <Text>{posts}</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.item}>
          <Text>{followers}</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.item}>
          <Text>{following}</Text>
          <Text>Following</Text>
        </View>
      </View>
    </View>
  );
};

export default Followers;
