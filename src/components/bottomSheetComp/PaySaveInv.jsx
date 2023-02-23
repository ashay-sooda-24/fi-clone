import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native';

const PaySaveInv = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.scanner}>
                <Ionicons name='qr-code' size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.pay}>
                <Text style={{ color: "white" }}>Pay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.save}>
                <Text style={{ color: "white" }}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.invest}>
                <Text style={{ color: "white" }}>Invest</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PaySaveInv

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        // borderColor: "red",
        width: "95%",
        height: "6%",
        marginTop: "5%",
        flexDirection: "row",
        justifyContent: "space-around"
    },

    scanner: {
        // borderWidth: 2,
        width: "12%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#01BD99",
        borderRadius: 18
    },
    pay: {
        backgroundColor: "#01BD99",
        height: "100%",
        width: "24%",
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center"
    },
    save: {
        backgroundColor: "#01BD99",
        height: "100%",
        width: "24%",
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center"
    },
    invest: {
        backgroundColor: "#01BD99",
        height: "100%",
        width: "24%",
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center"
    },
})