import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Colors} from './Colors';

export default function EmptyState() {
    return (
        <View
            style={{
                height: 300,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 12,
            }}
        >
            <Ionicons
                name="airplane-outline"
                size={64}
                color={Colors.primary}
            />
            <Text
                style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold',
                }}
            >
                Brak podróży
            </Text>
            <Text
                style={{
                    color: Colors.textSecondary,
                    fontSize: 14,
                }}
            >
                Dodaj swoją pierwszą podróż!
            </Text>
        </View>
    );
}