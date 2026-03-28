import {View, Text, StyleSheet} from 'react-native';

export default function Greeting(props) {
    const name = 'Student';
    const year = 2024;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Cześć, {props.name}!
            </Text>
            <Text style={styles.subtitle}>
                Rok: {props.year}
            </Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        padding: 16, backgroundColor: '#F)F4F8', borderRadius: 8, margin: 8,
    },
    title: {
        fontSize: 20, fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14, color: '#8B95A5', marginTop: 4,
    }
});