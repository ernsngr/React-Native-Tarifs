import { 
    Text,
    View,
    ActivityIndicator
} from "react-native";
import styles from "../../styles";
import useFetch from "../../hooks/useFetch/useFetch";
import { FlatList } from "react-native-gesture-handler";
import MealCard from '../../components/MealCard'


const Foods = ({navigation, route}) => {

    const {categoryName} = route.params

    const {data, loading, error} = useFetch(process.env.EXPO_PUBLIC_FOODS_URL + `c=` + categoryName);

    if(loading){
        return <ActivityIndicator size='large'/>
    }
    if(error){
        return <Text>{error.message}</Text>
    }

    const handleFoodSelect = (idMeal) => {
        navigation.navigate('Details', {idMeal})
    }

    const RenderFoods = ({item}) => {
        return(
            <MealCard meal={item} onSelect={() => handleFoodSelect(item.idMeal)} />
        )
    }

    return(
        <View style={styles.container}>
            
            <FlatList
                style={{
                    width: '100%',
                }}
                contentContainerStyle={{
                    width: '100%',
                    alignItems: 'center',
                }}
                data={data.meals}
                renderItem={RenderFoods}
                showsVerticalScrollIndicator={false}

            />


        </View>
    )
};

export default Foods;