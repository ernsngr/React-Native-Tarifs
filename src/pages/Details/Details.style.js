import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    detailsContainer:{
        width: '100%',
        height: 'auto',
        paddingTop: 10,
    },
    DetailsImageContainer:{
        width: '100%',
        height: 300,
    },
    DetailsImage:{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    nameAndCategory:{
        width: '100%',
        height: '100%',

    },
    nameContainer:{
        width: '100%',
        height: 'auto',
        padding: 10,
    },
    name:{
        fontSize: 22,
        fontWeight: '700',
        letterSpacing: 1.5
    },
    categoryAndArea:{
        width: '65%',
        height: 'auto',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    category:{
        fontSize: 14,
        fontWeight: '500',
    },
    area:{
        fontSize: 14,
        fontWeight: '500',
    },
    line:{
        fontSize: 14,
        fontWeight: '500'
    },
    tags:{
        width: '60%',
        height: 'auto',
        marginLeft: 12.5,
        justifyContent: 'center'
    },
    tagsText:{
        fontSize: 12,
        color: '#505050'
    },
    Instructions:{
        width: '90%',
        height:'auto',
        marginTop: 10,
        marginLeft: 12.5,
        textAlign: 'justify',
        marginBottom: 40
    },
    InstructionsText:{
        fontSize: 14,
        lineHeight: 25,
        color: '#252525',
        fontWeight: '500'
    }
})

export default styles