import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imgHolder}>
                <Image style={{ resizeMode: "cover", height: "100%", width: "100%" }} source={{ uri: "https://media.licdn.com/dms/image/D4D03AQHznI6G6vWp_Q/profile-displayphoto-shrink_800_800/0/1668529155778?e=1682553600&v=beta&t=9VjhB4rgCrSkKO_Gg-tiRzee2a6i3jNer8fzKh1Z6K0" }} />
            </View>

            <View style={styles.accountNumber} >
                <Text style={{ color: "white" }}>FI SAVINGS</Text><View style={{ height: 2, width: 2, borderWidth: 2, borderColor: "white", marginHorizontal: 5 }}></View><Text style={{ color: "white" }}>12334 4566 2345 22</Text>
            </View>

            <View style={styles.cardIcon} >
                <Ionicons name='card' size={28} color="white" />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        // borderColor: "white",
        // height: "25%",
        height: "15%",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    imgHolder: {
        // borderWidth: 2,
        // borderColor: "green"
        height: "80%",
        width: 40,
        borderRadius: 15,
        overflow: "hidden",
        borderRadius: 12
    },

    accountNumber: {
        // borderWidth: 2,
        // borderColor: "red",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        width: "70%",
        height: "75%",
        backgroundColor: "#393839",
        borderRadius: 12
    },

    cardIcon: {
        // borderWidth: 2,
        // borderColor: "yellow",
        width: "12%",
        height: "75%",
        backgroundColor: "#393839",
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 12
    }

})