import React, {useState} from "react";
import { StyleSheet, TextInput } from 'react-native';
import {Content, Form, Item, Header, Container, Title, Text } from 'native-base'

export default function FormName() {
    const [text, setText] = useState(0);

    const onChangeText = (text) => {
        setText(text);
    };

    return (
        <Container>
            <Header>
                <Content>
                    <Title style={styles.title}>Exercício 3</Title>
                </Content>       
            </Header>
            <Content>
                <Text style={styles.text}>What's your name?</Text>
                <TextInput style={styles.textInput} 
                placeholder='John Doe' 
                onChangeText={ (text) => onChangeText(text) } />
                <Text style={styles.result}>{ text }</Text>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },

    title: {
        textAlign: "center",
        paddingTop: 15
    },

    text: {
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 15,
        marginTop: 15
    },

    textInput: {
        fontSize: 17, 
        marginLeft: 15,
        marginTop: 15
    },

    result: {
        textAlign: "center",
        color: "#2B70C0",
        fontSize: 18, 
        marginLeft: 15,
        marginTop: 15
    }
})
