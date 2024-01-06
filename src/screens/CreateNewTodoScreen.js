import React, { useState, useEffect } from 'react';
import {
	Alert,ActivityIndicator, View, TextInput, TouchableOpacity,
	Text, StyleSheet
} from 'react-native';
import {styles} from '../css/styles';


const CreateNewTodoScreen = ({ navigation, route }) => {
	const [todoTitle, setTodoTitle] = useState('');
	const [errors, setErrors] = useState({});
	const [isFormValid, setIsFormValid] = useState(false);
	const [isLoading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	const createTodo = async () => {
		console.log("createTodo");
		try {
			const response = await fetch('https://dummyjson.com/todos/add',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						todo: todoTitle,
						completed: false,
						userId: 5
					})
				}
			).then(res => res.json());
			console.log("create response- id: "+ response.id +" todo: " + response.todo + " competed:" + response.completed  + " userId:" + response.userId);
			setLoading(false);
			setData(response);
			Alert.alert('Info','Todo create successfully.', [
				{text: 'OK', onPress: () => navigation.navigate('TodoListScreen', { fromScreen: 'CreateNewTodoScreen' })},
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
	
	useEffect(() => {
		validateForm();
	}, [todoTitle]);

	const validateForm = () => {
		let errors = {};

		if (!todoTitle) {
			errors.name = 'Todo Title is required.';
		}

		setErrors(errors);
		setIsFormValid(Object.keys(errors).length === 0);
	};


	return (
		<View style={styles.create_container}>
			<Text style={styles.todoTitle}>{"Enter todo title"}</Text>
			<View style={styles.create_space}/>  
			<TextInput
				style={styles.input}
				placeholder="Todo Title"
				value={todoTitle}
				onChangeText={setTodoTitle}
			/>
			<TouchableOpacity
				style={[styles.create_button, { opacity: isFormValid ? 1 : 0.5 }]}
				disabled={!isFormValid}
				onPress={async () => {
					
					if (isFormValid) {
						setLoading(true);
						console.log('Form submitted successfully! name: ' + todoTitle);
						createTodo();
					} else {
						console.log('Form has errors. Please correct them.');
						Alert.alert('Enter todo title.');
					}
				}}
			>
				<Text style={styles.create_buttonText}>Create</Text>
			</TouchableOpacity>

			{/* {Object.values(errors).map((error, index) => (
				<Text key={index} style={styles.error}>
					{error}
				</Text>
			))} */}

			{isLoading ? (
				<ActivityIndicator size="large" color="#a9a9a9" />
			) : null}

		</View>
	);
};

export default CreateNewTodoScreen;