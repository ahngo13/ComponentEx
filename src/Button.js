import React from 'react';
import {Pressable, Text} from 'react-native';
import PropsTypes from 'prop-types';

const MyButton = (props) => {
    //props는 object를 넘겨줌
    console.log(props);
    
    return(
        <Pressable
        style={{
            backgroundColor: '#3498db',
            padding: 16,
            margin: 10,
            borderRadius: 8,
        }}
        >
            <Text style={{color: 'white', fontSize: 24}} onPress={props.onPress}>{props.title}</Text>
        </Pressable>
    );
};

//빈값이 들어왔을 때 기본값 세팅
MyButton.defaultProps = {
    title: 'Button',
}

//prop-types 라이브러리 사용
MyButton.propTypes = {
    // 필수 전달 여부 (이외에도 func, object, array 등 있음)
    // title: PropsTypes.string.isRequired,
    
    //잘못된 타입을 전달하는 것을 막음
    title: PropsTypes.string,
}

export default MyButton;