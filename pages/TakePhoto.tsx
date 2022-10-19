import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TakePhoto() {


    const [type, setType] = useState(CameraType.back);
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
        })()
    }, [])

    return (
        <>
            <Camera type={type} style={{ flex: 1, width: "100%" }}>
                {/* <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                        <Text style={styles.text}>Flip Camera</Text>
                    </TouchableOpacity>
                </View> */}
            </Camera>

        </>
    );
}