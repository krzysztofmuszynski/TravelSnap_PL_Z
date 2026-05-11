import Star from "@/Components/Star";
import {View, StyleSheet, Text} from "react-native";

interface RatingStarsProps {
    rating: number | string;
}
export default function RatingStars({rating}: RatingStarsProps) {

    const ratingNumber = Number(rating);

    return(
        <View style={styles.stars}>
            {Array.from({length: ratingNumber}).map((_, index) => (
                <Star key={index}/>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    stars: {flexDirection: 'row', gap: 2},
});