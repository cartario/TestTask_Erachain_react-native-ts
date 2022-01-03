import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    // backgroundColor: 'gold',
  },
  avatar: {
    position: 'relative',
    width: 80,
    height: 80,
    backgroundColor: 'grey',
    borderRadius: 40,
  },
  changeAvatarBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    backgroundColor: 'blue',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#fff',
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
    paddingRight: 20,
  },
  item: {},
});
