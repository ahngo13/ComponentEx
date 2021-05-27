import React from 'react';
import {Text, View, Button} from 'react-native';
import MyButton from './Button';


const App = () => {
    return(
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text style={{fontSize:30, marginBottom: 10}}>Button Component</Text>
            <Button title="Button" onPress={()=> alert('Click !!!')}/>
            <MyButton title="My Button">Children</MyButton>
        </View>
    );
};

export default App;