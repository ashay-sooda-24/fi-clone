import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const Rewards = () => {
    return (
        <View style={styles.container}>
            {/* <Text>Rewards</Text> */}
            <View style={styles.rowContainer}>
                <View style={styles.box1}>
                    <Ionicons name='cut' color="white" size={35} />
                    <View>
                        <Text style={{ color: "white", fontSize: 16 }}>
                            Spend Your
                        </Text>
                        <Text style={{ color: "white", fontSize: 16 }}>
                            fi coins
                        </Text>
                    </View>
                </View>
                <View style={styles.box2}>
                    <Ionicons name='leaf' color="white" size={35} />
                    <View>
                        <Text style={{ color: "white", fontSize: 16 }}>
                            View Your
                        </Text>
                        <Text style={{ color: "white", fontSize: 16 }}>
                            rewards
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.containerLong}>
                <Ionicons name='megaphone' color="white" size={35} />
                <Text style={{ color: "white", fontSize: 16 }}>
                    Refer & earn $300 for each referal now
                </Text>
            </View>
        </View>
    )
}

export default Rewards

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        width: "95%",
        height: "30%",
        padding: "1%",
        marginTop: "2%"
    },

    rowContainer: {
        // borderWidth: 2,
        // borderColor: "red",
        width: "100%",
        height: "50%",
        flexDirection: "row"
    },
    box1: {
        // borderWidth: 2,
        // borderColor: "blue",
        marginRight: '2%',
        flex: 1,
        borderRadius: 30,
        backgroundColor: "#01BD99",
        // alignItems: "center",
        justifyContent: "space-around",
        padding: "2%",
        flexDirection: "row",
        alignItems: "center"
    },
    box2: {
        // borderWidth: 2,
        // borderColor: "blue",
        marginRight: '2%',
        flex: 1,
        borderRadius: 30,
        backgroundColor: "#01BD99",
        // alignItems: "center",
        justifyContent: "space-around",
        padding: "2%",
        flexDirection: "row",
        alignItems: "center"
    },

    containerLong: {
        // borderWidth: 2,
        height: "49%",
        backgroundColor: "#01BD99",
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around",
        marginTop: '1%',
        padding: "2%"
    }

})