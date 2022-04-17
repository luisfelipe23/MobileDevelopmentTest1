import React from "react";
import { StyleSheet,  View } from 'react-native';
import { Box, Text, Container } from 'native-base'

export default function Square() {
    return (
        <Container style={styles.container}>
            <Container style={styles.blueContainer}>
                <Text>Square 1</Text>
            </Container>
            <Container style={styles.greenContainer}>
                <Text>Square 2</Text>
            </Container>
            <Container style={styles.redContainer}>
                <Text>Square 3</Text>
            </Container>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }, 

    blueContainer: {
        flex: 1,
        backgroundColor: "blue",
        maxWidth: 100,
        maxHeight: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20
    },

    greenContainer: {
        flex: 1,
        backgroundColor: "green",
        maxWidth: 100,
        maxHeight: 100,
        alignItems: 'center',
        marginRight: 20, 
        justifyContent: 'center',
    }, 

    redContainer: {
        flex: 1,
        maxWidth: 100,
        backgroundColor:"red",
        maxHeight: 100,
        alignItems: 'center',
        justifyContent: 'center',
    }
  });
  