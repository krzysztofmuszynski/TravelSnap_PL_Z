import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function HomeScreen() {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Counter: {count}</Text>

            <Pressable style={styles.button} onPress={() => setCount(count + 1)}>
                <Text style={styles.buttonText}>+1</Text>
            </Pressable>

            <Pressable style={[styles.button, {backgroundColor: '#E94560'}]} onPress={() => setCount(0)}>
                <Text style={styles.buttonText}>Reset</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f4f8'},
    title: {fontSize: 48, fontWeight: 'bold', marginBottom: 20},
    button: {backgroundColor: '#61DAFB', paddingHorizontal: 32, paddingVertical: 12, borderRadius: 8, marginTop: 10},
    buttonText: {fontSize: 18, fontWeight: 'bold', color: '#OA1628'},
});