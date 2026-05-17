import {View, TextInput, StyleSheet, Pressable, Text} from "react-native";
import {Colors} from "@/Components/Colors";
import {useState} from "react";
import {useRouter} from "expo-router";

export default function AddTrip() {

    const router = useRouter();

    const [title, setTitle] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [rating, setRating] = useState('');

    const handleRatingChange = (value: string) => {
        if (value === "") {
            setRating("");
            return;
        }

        const parsedValue = parseInt(value, 10);

        if (parsedValue >= 1 && parsedValue <= 5) {
            setRating(parsedValue.toString());
        }
    };

    const isValidYearMonth = (value: string) => {
        const cleaned = value.replace(/[^0-9-]/g, "");

        if (cleaned.length <= 7) {
            setDate(cleaned);
        }
    };

    const handleAddTrip = () => {
        if (!title.trim() || !destination.trim()) {
            return;
        }

        router.replace({
            pathname: "/",
            params: {
                newTripId: Date.now().toString(),
                newTripTitle: title.trim(),
                newTripDestination: destination.trim(),
                newTripDate: date.trim() || "Brak daty",
                newTripRating: rating || "1",
            },
        });
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholderTextColor={Colors.textSecondary}
                placeholder="Tytuł podróży..."
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Destynacja"
                placeholderTextColor={Colors.textSecondary}
                value={destination}
                onChangeText={setDestination}
            />
            <TextInput
                style={styles.input}
                placeholder="Data (e.g. 2026-07)..."
                placeholderTextColor={Colors.textSecondary}
                value={date}
                onChangeText={isValidYearMonth}
            />
            <TextInput
                style={styles.input}
                placeholder="Ocena (e.g. 5)"
                placeholderTextColor={Colors.textSecondary}
                value={rating}
                onChangeText={handleRatingChange}
                keyboardType="numeric"
            />

            <Pressable style={styles.addBtn} onPress={handleAddTrip}>
                <Text style={styles.addText}>+ Dodaj podróż</Text>
            </Pressable>

            <Pressable style={styles.cancelBtn} onPress={() => router.back()}>
                <Text style={styles.cancelText}>Anuluj</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex:1, padding: 50, backgroundColor: Colors.background},
    heading: {fontSize: 28, fontWeight: 'bold', marginBottom: 16, marginTop: 48},
    input: {borderWidth: 1, borderColor: Colors.inputBorder, borderRadius: 12, padding: 12, fontSize: 16, backgroundColor: Colors.background, marginBottom: 8, color: '#fff'},
    addBtn: {backgroundColor: Colors.accent, padding: 14, borderRadius: 12, marginTop: 4, marginBottom: 16, alignItems: 'center'},
    addText: { fontSize: 16, fontWeight: "bold", color: Colors.textPrimary},
    cancelBtn: { padding: 14, borderRadius: 12, marginTop: 12, alignItems: "center"},
    cancelText: { fontSize: 16, color: Colors.textSecondary},
});