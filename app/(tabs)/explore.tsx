import {View, Text, StyleSheet} from 'react-native';
import {Colors} from "@/Components/Colors";
import {Ionicons} from "@expo/vector-icons";

export default function Explore() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Discover new places</Text>
            <Text style={styles.subtitle}>Coming soon...</Text>
            <Ionicons name="compass" size={64} color={Colors.primary} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.background},
    title: {fontSize: 24, fontWeight: 'bold', color: Colors.primary},
    subtitle: {fontSize: 16, color: Colors.textSecondary},
});