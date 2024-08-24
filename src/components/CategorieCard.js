import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native'
import styles from '../styles';

const CategorieCard = ({category, onSelect}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect} >

            <View style={styles.Card}>
                
                <View style={styles.imageContainer}>

                    <Image style={styles.Image} source={{uri : category.strCategoryThumb }}/>

                </View>  

                <Text style={styles.CardName}>
                    {category.strCategory}
                </Text>


            </View>
        </TouchableWithoutFeedback>
    )
};

export default CategorieCard;