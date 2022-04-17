import React, { useState } from "react";
import { StyleSheet, View } from 'react-native';
import { Container, Content, Header, Text, Title, Button } from 'native-base'

export default function ButtonCounter() {
    const [count, setCount] = useState(0);

    const onPress = () => {
        setCount(count + 1);
    };

    return (
        <Container>
            <Header>
                <Content>
                    <Title style={styles.title}>Exercício 1</Title>
                </Content>
            </Header>
            
            <Container style={styles.container}>
                <Text>You've pressed the button: {count} time(s)</Text>
                <Content>
                    <Button onPress={onPress} style={styles.button}>
                        <Text>Press me</Text>
                    </Button>
                </Content>
            </Container>
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
    button: {
        marginTop: 20
    }
    
})
