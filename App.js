import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import TodoListScreen from './src/screens/TodoListScreen'
import EditTodoScreen from './src/screens/EditTodoScreen';
import CreateNewTodoScreen from './src/screens/CreateNewTodoScreen';
import AppBar from './src/components/AppBar';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TodoListScreen"
        screenOptions={{
          header: (props) => <AppBar {...props} />,
        }}>
        <Stack.Screen
          name="TodoListScreen"
          component={TodoListScreen}
          //options={{title: 'TodoList'}}
        />
        <Stack.Screen name="EditTodoScreen" component={EditTodoScreen} />
        <Stack.Screen name="CreateNewTodoScreen" component={CreateNewTodoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;

