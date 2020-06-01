import {StyleSheet} from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: 'rgba(17,34,68,1)',
    alignItems: 'center',
  },
  body: {
    flex: 9,
    alignItems: 'center',
  },
  title: {
    marginTop: 10,
    fontSize: 22,
    color: 'white',
    fontWeight: '300',
  },
  content: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 20,
  },
  inputs: {
    backgroundColor: 'white',
    borderRadius: 5,
    textAlign: 'center',
    width: '80%',
  },
  buttons: {
    flex: 1,
  },
});
