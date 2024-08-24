import {
    View,
    Text,
    Image,
    ActivityIndicator
} from 'react-native'
import styles from './Details.style';
import useFetch from '../../hooks/useFetch/useFetch';
import { FlatList } from 'react-native-gesture-handler';

const Details = ({route}) => {

    const {idMeal} = route.params;

    const {data, loading, error} = useFetch(process.env.EXPO_PUBLIC_DETAILS_URL + `i=` + idMeal);

    if(loading){
        return <ActivityIndicator size='large'/>
    }
    if(error){
        return <Text>{error.message}</Text>
    }

    const RenderDetails = ({item}) => (
        <View style={styles.detailsContainer}>
            <View style={styles.DetailsImageContainer} >
                <Image style={styles.DetailsImage} source={{uri: item.strMealThumb}}/>
            </View>

            <View style={styles.nameAndCategory}>

                <View style={styles.nameContainer}>
                    <Text style={styles.name}>
                        {item.strMeal}
                    </Text>
                </View>

                <View style={styles.categoryAndArea}>
                    <Text style={styles.category}>Category: {item.strCategory} </Text>
                    <Text style={styles.line}> - </Text>
                    <Text style={styles.area}>Area: {item.strArea} </Text>
                </View>
                <View style={styles.tags}>
                    <Text style={styles.tagsText}>{item.strTags}</Text>
                </View>

                <View style={styles.Instructions}>
                    <Text style={styles.InstructionsText}> 
                        {item.strInstructions}
                    </Text>
                </View>

            </View>

            

        </View>
    )
    

    return(
        <View style={styles.container}>
            
            <FlatList
                style={{
                    width: '100%',
                }}
                showsVerticalScrollIndicator={false}
                data={data.meals}
                renderItem={RenderDetails}
                keyExtractor={item => item.idMeal}
            />

        </View>
    )
};

export default Details;