import { 
    Text,
    ActivityIndicator,
    SafeAreaView,
    FlatList,
    View
} from "react-native";
import { useEffect, useState } from "react";
import styles from '../../styles';
import useFetch from "../../hooks/useFetch/useFetch";
import CategorieCard from "../../components/CategorieCard";


const Categories = ({navigation}) => {

    const {data, loading, error} = useFetch(process.env.EXPO_PUBLIC_CATEGORIES_URL)

    if(loading){
        return <ActivityIndicator size='large'/>
    }
    if(error){
        return <Text>{error}</Text>
    }

    const handleSelect = (categoryName) => {
         navigation.navigate('Foods',{categoryName});
    }

    const RenderCategory = ({item}) => {
        return(
            <CategorieCard category={item} onSelect={() => handleSelect(item.strCategory)} />
        )
    }


    return(
        <SafeAreaView style={styles.container} >
            <FlatList
                style={{
                    width: '100%',
                }}
                contentContainerStyle={{
                    width: '100%',
                    alignItems: 'center',
                }}
                
                data={data.categories}
                renderItem={RenderCategory}
                showsVerticalScrollIndicator={false}
                scrollEnabled

            />
        </SafeAreaView>
    )

}

export default Categories;