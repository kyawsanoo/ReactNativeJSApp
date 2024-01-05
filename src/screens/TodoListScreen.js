import React, {useEffect, useState} from 'react';
import {StyleSheet,SafeAreaView, ActivityIndicator, FlatList, TouchableOpacity, Button,
    Text, View, Alert} from 'react-native';
import {styles} from '../css/styles'     



function LoadingAnimation() {
  return (
    <View style={styles.indicatorWrapper}>
      <ActivityIndicator size="large" color="#000" style={styles.indicator}/>
      <View style={{  justifyContent: 'center' }}>
        <Text style={{ fontSize: 18, textAlign: 'center', padding:"25" }}>Deleting...</Text>
      </View>
    </View>
  );
}

function TodoListScreen  ({navigation}) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    
  
    const getTodos = async () => {
      try {
        const response = await fetch('https://dummyjson.com/todos');
        const json = await response.json();
        console.log(json);
        setLoading(false);
        setData(json.todos);
  
      } catch (error) {
        setLoading(false);
        console.error(error);
      } finally {
      }
    };

    const deleteTodo = async (id) =>{
        setDeleteLoading(true);
        console.log("onPressed() id: " + id);
        try {
          const response = await fetch('https://dummyjson.com/todos/' + id,
            {
              method: 'DELETE',
              headers: { 'Content-Type': 'application/json' },
              
            }
          ).then(res => res.json());
          setDeleteLoading(false);
          console.log("delete response- id: "+ response.id +" todo: " + response.todo + " competed:" + response.completed  + " userId:" + response.userId);
          if(response.isDeleted){Alert.alert('Info','Todo is deleted successfully.', [
            {text: 'OK', onPress: () => console.log('dismissing alert')},
          ],
          { cancelable: false }
          );}else{
            Alert.alert('Info','Deleting todo failed', [
              {text: 'OK', onPress: () => console.log('dismissing alert')},
            ],
            { cancelable: false }
            );
          }
          
        } catch (error) {
          console.error(error);
          setDeleteLoading(false);
        } finally {
        }
    }

    const handleRefresh = async() => {
        setData([]);
        setRefreshing(true);
        getTodos();
        setRefreshing(false);
    }

    const EmptyContainer = () => {
      return (<View style={styles.empty_container}><Text>{"List is empty. Please create to do."}</Text></View>);
    }

    useEffect(() => {
      getTodos();
    }, []);
  
    return (
      <SafeAreaView style={styles.container}>

       <View style={{flex: 1, padding: 5}}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#a9a9a9" style={styles.indicator}/>
        ) : 
          <View>
          <FlatList
            data={data}
            refreshing={refreshing}
            onRefresh={handleRefresh}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={EmptyContainer()}
            keyExtractor={({id}) => id}
            renderItem={({item}) => (
                
                <View>
                    <View style={styles.content}>    
                        <Text style = {styles.text}>{"name: " + item.todo}</Text>
                        <View style={styles.spaceContent}/>    
                        <Text style = {styles.text}>{"completed: " + item.completed.toString()}</Text>
                        <View style={styles.space}/>    
                        <Text style = {styles.text}>{"user id: " + item.userId.toString()}</Text>
                        <View style={styles.space}/>  
                        <View style={styles.fixToText}>
                            <TouchableOpacity onPress={() => navigation.navigate('EditTodoScreen',{ todo: {
                                    id: item.id,
                                    todo: item.todo,
                                    completed: item.completed,
                                    userId: item.userId
                                },})} style={styles.button}>
                                <Text style={styles.buttonText}>Edit</Text>
                            </TouchableOpacity>
                            <View style={styles.space} />
                            
                            <TouchableOpacity onPress={() => 
                                  Alert.alert('Info',
                                  'Are you sure to delete?', [
                                    {text: 'Cancel', onPress: () => console.log('cancel dismiss')
                                    },
                                    
                                     {text: 'OK', onPress: async() => deleteTodo(item.id)},   
                                     
                                    ],
                                  { cancelable: false }
                                  )
                               } style={styles.button}>
                               <Text style={styles.buttonText}>Delete</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </View>    
                </View>
            )}
            
          />
          {deleteLoading && 
            <View style={{
                  ...StyleSheet.absoluteFill,
                  justifyContent: 'center',
                  alignItems: 'center',
              }}>
                  <LoadingAnimation/>
            </View>
          }
          <TouchableOpacity onPress={() => navigation.navigate('CreateNewTodoScreen')} style={styles.fab}>
              <Text style={styles.fabIcon}>+</Text>
          </TouchableOpacity>
          </View>
         
      
        }
       
      </View>
      </SafeAreaView>
    );
    
  };

  
  
  export default TodoListScreen;