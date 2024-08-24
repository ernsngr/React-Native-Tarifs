import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent:'center',
    },
    Card:{
        width: 330,
        height: 70,
        backgroundColor: '#252525',
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    imageContainer:{
        width: '40%',
        height: '80%',
        backgroundColor: '#e5e5e5',
        borderRadius: 100,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    Image:{
        width: 320 * 0.25,
        height: 200 * 0.25,
        objectFit: 'cover',
    },
   
    CardName:{
        width: 200,
        height: 'auto',
        textAlign: 'left',
        color: '#f5f5f5',
        fontSize: 16,
        fontWeight: '800',
        marginLeft: 30,
        letterSpacing: 1
    },
    
})

export default styles