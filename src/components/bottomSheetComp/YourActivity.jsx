import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import activityData from '../../../data/data'
import { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import PaySaveInv from './PaySaveInv'

const YourActivity = () => {
    return (
        <View style={styles.yourActivityContainer}>
            <View style={styles.sectionTitleContainer}>
                <Text style={{ fontSize: 18 }}>Your Activity</Text>
                <View style={{ flexDirection: "row" }}><Text>VIEW ALL</Text><Text style={{ color: "green" }}> &gt; </Text></View>
            </View>

            <BottomSheetFlatList
                data={activityData}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.activityContainer}>
                        <View style={styles.individiualComponent}>
                            <View style={styles.logo}>
                                <Text style={{ color: "white" }}>{item.letter}</Text>
                            </View>
                            <Text>{item.amount}</Text>
                            <Text>{item.desc}</Text>
                        </View>
                    </View>
                )}
                horizontal
            />
        </View>
    )
}

export default YourActivity

const styles = StyleSheet.create({
    yourActivityContainer: {
        // borderWidth: 2,
        width: "95%",
        marginTop: "8%",
        height: "18%",
    },

    sectionTitleContainer: {
        // borderWidth: 2,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },

    activityContainer: {
        width: 100,
        margin: 10,
        marginTop: "15%"

    },
    individiualComponent: {
        // width: "100%"
        justifyContent: "space-between",
        alignItems: "center"
    },
    logo: {
        // borderWidth: 2,
        backgroundColor: "orange",
        height: "50%",
        borderRadius: 25,
        width: "45%",
        alignItems: "center",
        justifyContent: "center"
    },

})







