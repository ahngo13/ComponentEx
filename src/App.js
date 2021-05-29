import React from 'react';
import {Text, View, Button} from 'react-native';
import MyButton from './Button';
import Counter from './Counter';
import EventButton from './EventButton';
import EventInput from './EventInput';


const App = () => {
    return(
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Counter/>
            <EventButton title="Press"/>
            <EventInput/>
        </View>
    );
};

export default App;