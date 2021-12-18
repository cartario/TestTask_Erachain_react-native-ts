import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: 'pink',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#fff',
    borderBottomWidth: 3,
    borderTopWidth: 3,
  },
  rowNoBorder: {
    borderTopWidth: 0,
  },
});
