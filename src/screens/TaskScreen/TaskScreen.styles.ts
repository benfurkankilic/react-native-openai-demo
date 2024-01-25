import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 24
  },
  mainContainer: {
    flex: 1,
  },
  bottomContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    textAlign: 'left',
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#666',
    marginTop: 8
  },
  input: {
    backgroundColor: '#eee',
    flex: 1,
    padding: 16,
    borderRadius: 8
  },
  button: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'blue',
    marginLeft: 8
  },
  disabled: {
    backgroundColor: '#ccc'
  },
  buttonTitle: {
    color: '#fff'
  }
});
