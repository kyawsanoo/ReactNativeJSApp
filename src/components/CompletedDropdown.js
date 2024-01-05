import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {ActivityIndicator, StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';

const styles = StyleSheet.create({
  container : {
    marginTop: 12,
    padding: 12,
    
  },
  space: {
    width: 20, 
    height: 20,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
  },
  button: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#a9a9a9',
  },
  buttonText:{
    color: 'white'
  }
});

function CompletedDropdown({id, todo, completed, userId}){
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [selectedCompleted, setSelectedCompeted] = useState(null);
  const [items, setItems] = useState([
    {label: 'true', value: 'true'},
    {label: 'false', value: 'false'}
  ]);

  
  const updateTodo = async () => {
    console.log("updatTodo");
    setLoading(true);
    try {
      const response = await fetch('https://dummyjson.com/todos/' + id,
        {
          method: 'PUT', /* or PATCH */
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              completed: selectedCompleted,
          })
        }
      ).then(res => res.json());
      console.log("update response- id: "+ response.id +" todo: " + response.todo + " competed:" + response.completed  + " userId:" + response.userId);
      setLoading(false);
      setData(response);
      Alert.alert('Info','Todo updated successfully.', [
        {text: 'OK', onPress: () => console.log('dismissing alert')},
      ],
      { cancelable: false }
      );
    } catch (error) {
      setLoading(false);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onPressed = async () =>{
      console.log("onPressed() id: " + id, " todo: " + todo + " completed: " + selectedCompleted, " userId:"  + userId);
      if(selectedCompleted == null){
        Alert.alert('info', 'Please select completed.', [
          {text: 'OK', onPress: () => console.log('dismissing alert')},
        ],
        { cancelable: false }
      );
      
      }else{
        updateTodo();
      
      }
  }  
  
  
  return (
    <View style={styles.container}>
    <View style={styles.space}/> 
    <Text style={styles.titleText}>{"Todo Name:"}</Text> 
    <View style={styles.space}/> 
    <Text style={{color: "black", fontSize: 16}}>{todo}</Text>  
    <View style={styles.space}/> 
    <Text style={styles.titleText}>{"Completed:"}</Text>  
    <View style={styles.space}/>
    <DropDownPicker
      placeholder="Select"
      placeholderStyle={{
        color: "grey",
        fontWeight: "bold"
      }}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      showArrowIcon={true}
      onChangeValue={newValue => {
        console.log("onChangedItem: " + newValue)
        setSelectedCompeted(newValue);
      }
    }
    />
    <View style={styles.space}/>
    <TouchableOpacity onPress = {onPressed} style={styles.button}>
            <Text style={styles.buttonText}>Update</Text>
    </TouchableOpacity>
    <View style={styles.space}/>
    {isLoading ? (
          <ActivityIndicator size="large" color="#a9a9a9" />
        ) : null}
    
    </View>
  );
  };


export default CompletedDropdown;