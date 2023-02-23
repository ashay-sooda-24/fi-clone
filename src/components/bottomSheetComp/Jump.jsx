import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const Jump = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <View style={styles.b1r1}>
                    <Ionicons name='ribbon' size={30} color="white" />
                    <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>9%</Text>
                </View>
                <Text style={{ color: "gray" }} >pa return</Text>
            </View>
            <View style={styles.box2}>
                <Text style={{ color: 'white', fontSize: 15 }}>Beat inflation from your wealth. Earn upto 9% pa</Text>
                <TouchableOpacity style={styles.investNow}>
                    <Text style={{ marginRight: '1%', color: '#01BD99' }}>Invest Now &gt;</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Jump

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        width: "95%",
        height: "20%",
        marginTop: "1%",
        flexDirection: 'row',
        padding: '2%'
    },

    box1: {
        width: "35%",
        // borderWidth: 2,
        // borderColor: "red",
        marginRight: '1%',
        borderRadius: 30,
        backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center"

    },
    b1r1: {
        // borderWidth: 2,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
        width: '100%'
    },

    box2: {
        flex: 1,
        borderRadius: 30,
        backgroundColor: "orange",
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2%'

    },
    investNow: {
        // borderWidth: 2,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-end',
        padding: '2%',

    }
})