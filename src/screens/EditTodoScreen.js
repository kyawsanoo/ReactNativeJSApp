import React, { useState } from 'react';
import {SafeAreaView} from 'react-native';

import CompletedDropdown from '../components/CompletedDropdown';

const EditTodoScreen = ({navigation, route}) => {
   const todo = route.params.todo;
   console.log("todo:" + todo.id +" " + todo.todo + " " + todo.completed+ " " + todo.userId);
   return (
          <SafeAreaView>
          <CompletedDropdown{...todo}/>
          </SafeAreaView>
   );
};
  
export default EditTodoScreen;