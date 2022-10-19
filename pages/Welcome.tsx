import React, { useRef, useEffect } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView, Image } from "react-native";

import carLogo from '../assets/img/car-logo.png';
import textLogo from '../assets/img/text-logo.png';

export default function Welcome({ navigation }: any) {

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: false
        }).start();
    };

    useEffect(() => {
        fadeIn();
        setTimeout(() => {
            navigation.navigate('main');
        }, 2000)
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View
                style={[
                    styles.fadingContainer,
                    {
                        // Bind opacity to animated value
                        opacity: fadeAnim
                    }
                ]}
            >
                <Image source={carLogo}></Image>
            </Animated.View>
        </SafeAreaView>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    fadingContainer: {
        padding: 20,
        backgroundColor: "transparent"
    },
    fadingText: {
        fontSize: 28
    },
    buttonRow: {
        flexBasis: 100,
        justifyContent: "space-evenly",
        marginVertical: 16
    }
});