import {View, StyleSheet, Text, Pressable} from "react-native";
import {Colors} from "@/Components/Colors";
import {Stack, useLocalSearchParams, useRouter} from "expo-router";
import {Ionicons} from "@expo/vector-icons";
import RatingStars from "@/Components/RatingStars";

export default function Trip() {

    const router = useRouter();

    const {id, title, destination, date, rating} = useLocalSearchParams<{
       id: string;
       title: string;
       destination: string;
       date: string;
       rating: string;
    }>();

    const ratingNumber = Number(rating);

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: title ?? 'Trip Details',
                    headerStyle: { backgroundColor: Colors.dark.background },
                    headerTintColor: Colors.dark.tint,
                }}
            />
            <Text style={styles.title}>{title}</Text>

            <View style={styles.row}>

                <Ionicons name="location" size={16} color="#8B95A5" />

                <Text style={styles.metaText}>{destination}</Text>

            </View>

            <View style={styles.row}>

                <Ionicons name="calendar" size={14} color="#8B95A5" />

                <Text style={styles.metaText}>{date}</Text>

            </View>

            <View style={styles.ratingContainer}>

                <RatingStars rating={rating} />

            </View>
            <Pressable onPress={() => router.back()}>
                <Text style={styles.button}>Powrót do listy</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: Colors.background, padding: 16},
    button: {backgroundColor: Colors.dark.tint, padding: 12, borderRadius: 12, marginTop: 16, textAlign: 'center'},
    title: {fontSize: 24, fontWeight: 'bold', color: Colors.textPrimary, marginBottom: 16},
    row: {flexDirection: 'row', alignItems: 'center', marginBottom: 8},
    metaText: {fontSize: 14, color: Colors.textSecondary, marginLeft: 8},
    ratingContainer: {marginTop: 16, alignItems: 'center'},
});