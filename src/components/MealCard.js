import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import styles from "../styles";

const MealCard = ({meal, onSelect}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.Card}>
                
                <View style={styles.imageContainer}>
                    <Image source={{uri: meal.strMealThumb}} style={styles.Image} />
                </View>
                
                <Text style={styles.CardName}>
                    {meal.strMeal}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default MealCard