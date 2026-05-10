import {View, Text, StyleSheet} from 'react-native';
import {Colors} from "@/Components/Colors";

interface ScreenHeaderProps {
    tripCount: number;
}

export default function ScreenHeader({tripCount}: ScreenHeaderProps) {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.appName}>TravelSnap</Text>
                <Text style={styles.subtitle}>Twój dziennik podróży</Text>
            </View>
            <View style={styles.badge}>
                <Text style={styles.badgeText}>{tripCount}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: { backgroundColor: Colors.background ,flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 20, paddingHorizontal: 16, paddingBottom: 12},
    appName: {fontSize: 24, fontWeight: 'bold', color: Colors.primary},
    badge: {borderWidth: 1, borderColor: Colors.border, borderRadius: 18, width: 36, height: 36, justifyContent: 'center', alignItems: 'center'},
    badgeText: {fontSize: 16, fontWeight: 'bold', color: '#fff', textAlign: 'center'},
    subtitle: {fontSize: 14, color: '#fff'},
});