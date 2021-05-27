import React from 'react';
import {Pressable, Text} from 'react-native';

const MyButton = (props) => {
    console.log(props);
    return(
        <Pressable
        style={{
            backgroundColor: '#3498db',
            padding: 16,
            margin: 10,
            borderRadius: 8,
        }}
        onPress={()=> {alert('hihihi')}}>
            <Text style={{color: 'white', fontSize: 24}}>{props.title} {props.children}</Text>
        </Pressable>
    );
};

export default MyButton;