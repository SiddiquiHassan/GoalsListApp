import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const App = () => {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [goalsList, setGoalsList] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setGoalsList([...goalsList,enteredGoal]);
  };

  return (
    <View style={styles.screen}>
      <View 
      style={styles.inputContainer}>
         <TextInput 
         placeholder="Mention Your Goal Here" 
         style={styles.textInput} 
         onChangeText={goalInputHandler} 
         value={enteredGoal}
         />
         <Button 
         title="+" 
         style={styles.button}
         onPress={addGoalHandler}
         />
      </View>
      <View>
        { goalsList.map(goal => <View key={goal} style={styles.listItem}><Text >{goal}</Text></View>)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen:{
    padding: 60
  },
  inputContainer:{
    flexDirection:'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  textInput:{ 
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    marginBottom: 5,
    padding: 5,
    width: '90%' 
  },
  listItem:{
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'lightgrey',
    borderColor: 'black',
    borderRadius: 5
  }
});

export default App;