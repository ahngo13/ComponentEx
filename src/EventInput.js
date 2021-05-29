import React, { useState } from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';

const EventInput = (props) => {
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');
    const _onChange = event => setText(event.nativeEvent.text);
    const _onChangeText = text => setText2(text);
    return(
       <View>
           <Text style={{margin:10, fontSize:30}}>text: {text} </Text>
           <TextInput
                style={{borderWidth: 1, padding: 10, fontSize: 20}}
                placeholder="Enter a text..."
                onChange={_onChange}
           />
           <Text style={{margin:10, fontSize:30}}>text2: {text2} </Text>
            <TextInput
                style={{borderWidth: 1, padding: 10, fontSize: 20}}
                placeholder="Enter a text..."
                onChangeText={_onChangeText}
           />
       </View>
    );
};

export default EventInput;