import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 24
  },
  mainContainer: {
    paddingBottom: 24,
  },
  bottomContainer: {
    marginTop: 16,
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
  subtitle: {
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#666',
    marginTop: 4
  },
  text: {
    textAlign: 'left',
    fontSize: 14,
    fontWeight: 'normal',
    color: '#666',
    marginTop: 4
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
