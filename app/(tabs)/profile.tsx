import {View, Text, StyleSheet} from 'react-native';
import {Colors} from "@/Components/Colors";
import {trips} from "@/app/data/trips";

export default function Profile() {

    const totalTrips = trips.length;
    const averageRating = trips.reduce((sum, trip) => sum + trip.rating, 0) / totalTrips;

    return (
        <View style={styles.container}>
            <View style={styles.avatar}><Text>KM</Text></View>
            <View><Text style={styles.name}>Krzysztof Muszyński</Text></View>
            <Text style={styles.basicInfo}>Joined March 2026</Text>
            <View style={styles.stats}>
                <View style={styles.stat}>
                    <Text style={styles.statLabel}>Trips</Text>
                    <Text style={styles.statNumber}>{totalTrips}</Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statLabel}>Countries</Text>
                    <Text style={styles.statNumber}>5</Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statLabel}>Rating</Text>
                    <Text style={styles.statNumber}>{averageRating}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {backgroundColor: Colors.background, paddingTop: 50, height: '100%'},
    avatar: {width: 50, height: 50, borderRadius: 50, fontSize: 14, fontWeight: 'bold', color: Colors.textPrimary, backgroundColor: Colors.primary, alignItems: 'center', justifyContent: 'center'},
    basicInfo: {fontSize: 16, color: Colors.textSecondary},
    stats: {flexDirection: 'row', justifyContent: 'space-between', padding: 16,},
    stat: {flex: 1, alignItems: 'center'},
    statNumber: {fontSize: 24, fontWeight: 'bold', color: Colors.textPrimary},
    statLabel: {fontSize: 12, color: Colors.textSecondary,},
    name: {fontSize: 22, fontWeight: 'bold', color: Colors.textPrimary},
});