import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BodyCenter = () => {
    return (

        <View style={styles.container}>
            <View style={styles.centerContainer}>

                <View style={styles.balanceContainer}>
                    <Text style={styles.balanceTitle}>CURRENT BALANCE</Text>
                    <View style={styles.balanceAmtContainer}>
                        <Text style={styles.balanceAmt}>$5,000</Text>
                        <View style={styles.plusIconContainer}>
                            <Text style={styles.plusIcon}>+</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.dataContainer}>
                    <View style={styles.spentContainer}>
                        <Text style={styles.numericText}>1.1L</Text>
                        <Text style={styles.captionText}>SPENT</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.spentContainer}>
                        <Text style={styles.numericText}>5.3K</Text>
                        <Text style={styles.captionText}>SAVED</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.spentContainer}>
                        <Text style={styles.numericText}>45.5K</Text>
                        <Text style={styles.captionText}>INVESTED</Text>
                    </View>
                </View>

                <Text style={{ textAlign: "center", marginTop: "4%", color: "#343534" }}>IN MARCH</Text>
                <View style={styles.bottomBankDetail}>
                    <Text style={{ color: "gray", textAlign: "center" }}>FEDERAL BANK</Text>
                    <View style={styles.indicatorContainer}>
                        <View style={styles.longIndi} /><View style={styles.shortIndi} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default BodyCenter

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        // borderColor: "white",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    centerContainer: {
        // borderWidth: 2,
        // borderColor: 'white',
        height: "60%",
        width: "70%"
    },

    balanceContainer: {
        // borderWidth: 2,
        alignItems: "center",
        height: "25%",
        justifyContent: "space-between"
    },
    balanceTitle: {
        color: "gray"
    },
    balanceAmtContainer: {
        // borderWidth: 2,
        width: "50%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    balanceAmt: {
        color: "#0FA888",
        fontSize: 24
    },
    plusIconContainer: {
        backgroundColor: "#393839",
        width: "20%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    plusIcon: {
        color: "#0FA888",
        fontSize: 20
    },

    dataContainer: {
        // borderWidth: 2,
        // borderColor: "red",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#343534",
        height: "30%",
        marginTop: 20,
        borderRadius: 15
    },
    spentContainer: {
        // borderWidth: 2,
        // borderColor: "green",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    numericText: {
        color: "white",
        fontSize: 18
    },
    captionText: {
        color: "#666667"
    },
    divider: {
        borderWidth: 1,
        height: "55%",
        borderColor: "gray"
    },

    bottomBankDetail: {
        marginTop: "10%"
    },

    indicatorContainer: {
        // borderWidth: 2,
        height: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5
    },
    longIndi: {
        width: 20,
        backgroundColor: "white",
        height: 5,
        marginRight: 5,
        borderRadius: 10
    },
    shortIndi: {
        width: 5,
        backgroundColor: "gray",
        height: 5,
        borderRadius: 10
    },
})