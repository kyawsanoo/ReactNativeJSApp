import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  indicator: {
    marginTop: 80
  },
  indicatorWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    //blurOverlay
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 100,
  },
  indicatorText: {
    fontSize: 18,
    marginTop: 12,
    color: 'black'
  },
  container: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
  },
  empty_container: {
    flex: 1,
   
  },
  appTitleText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  text: {
    color: '#000',
    fontSize: 16,
  },
  content: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    color: '#666',
    backgroundColor: '#eaeaea',
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: '#ff0000',
  },
  separateHero: {
    height: '100vh'
  },
  fixToText: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    marginRight: 5,
    padding: 5

  },

  button: {
    alignItems: 'center',
    padding: 10,
    width: 100,
    borderRadius: 10,
    backgroundColor: '#a9a9a9',
  },

  buttonText: {
    color: 'white'
  },

  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
    bottom: 20,
    backgroundColor: '#a9a9a9',
    borderRadius: 30,
    elevation: 8
  },
  fabIcon: {
    fontSize: 40,
    color: 'white'
  },

  space: {
    width: 10,
    height: 10,
  },

  spaceContent: {
    width: 20,
    height: 20,
  },

  dropdown_container: {
    marginTop: 12,
    padding: 12,

  },

  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
  },

  update_button: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#a9a9a9',
  },

  // create new todo page style
  create_container: {
    flex: 1,
    marginTop: 40,
    padding: 10,
    justifyContent: 'top',
    alignItems: "center",
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  create_button: {
    backgroundColor: '#a9a9a9',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 12,
  },
  create_buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  error: {
    color: 'black',
    fontSize: 16,
    marginBottom: 12,
  },
  create_space: {
    width: 10,
    height: 10,
  },

  // create new todo page style
  create_container: {
    flex: 1,
    marginTop: 40,
    padding: 10,
    justifyContent: 'top',
    //alignItems: "center",
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  create_button: {
    backgroundColor: '#a9a9a9',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 12,
  },
  create_buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  error: {
    color: 'black',
    fontSize: 16,
    marginBottom: 12,
  },
  create_space: {
    width: 10,
    height: 10,
  },


});

