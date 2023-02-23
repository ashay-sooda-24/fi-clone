import { StatusBar } from "expo-status-bar";
import { useCallback, useMemo } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CustomFooter from "../components/CustomFooter";
import customBackdrop from "../components/customBackdrop";
import Ionicons from '@expo/vector-icons/Ionicons'
import PaySaveInv from "../components/bottomSheetComp/PaySaveInv";
import YourActivity from "../components/bottomSheetComp/YourActivity";
import Rewards from "../components/bottomSheetComp/Rewards";
import Jump from "../components/bottomSheetComp/Jump";


const EntryScreen = ({ navigation }) => {
    const snapPoints = useMemo(() => ["15%", "50%", "95%"], []);

    const handleSheetChange = useCallback(
        (index) => {
            if (index === 0) {
                navigation.replace('Main')
                // index = 1
                console.log("done");
            }
        },
        // [snapPoints]
        [snapPoints, navigation]
    );

    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <BottomSheet
                        index={1}
                        snapPoints={snapPoints}
                        footerComponent={CustomFooter}
                        onChange={handleSheetChange}
                        backdropComponent={customBackdrop}
                    >
                        <View style={styles.contentContainer}>
                            {/* <Text>Awesome</Text> */}
                            <View style={styles.inputHolder}>
                                <Text style={{ color: "white" }}>Fi</Text>
                                <TextInput style={{ width: "80%", height: "100%", justifyContent: "center" }} placeholder="Ask fi about your spends" placeholderTextColor="gray" />
                                <Ionicons name='mic' size={25} color="white" />
                            </View>

                            <PaySaveInv />
                            <YourActivity />

                            <View style={styles.rewardContainer}>
                                <Text style={{ fontSize: 17 }}>Rewards & Invites</Text>
                            </View>
                            <Rewards />

                            <View style={styles.rewardContainer}>
                                <Text style={{ fontSize: 17 }}>Jump</Text>
                            </View>
                            <Jump />

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 12, color: '#77887e' }}>POWERED BY</Text>
                                <Text style={{ fontSize: 14, color: '#77887e', marginLeft: '1%' }}>BHIM</Text>
                                {/* <Image style={{ height: 10, width: 10 }} source={require('../../assets/bhim.png')} /> */}
                            </View>
                        </View>
                    </BottomSheet>
                </View>
            </GestureHandlerRootView>

        </SafeAreaProvider>
    );
}

export default EntryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#292928",
    },
    contentContainer: {
        flex: 1,
        alignItems: "center",
        // borderWidth: 2,
        // borderColor: "red"
    },

    inputHolder: {
        backgroundColor: "#555555",
        flexDirection: "row",
        width: "95%",
        height: "7%",
        justifyContent: "space-around",
        alignItems: "center",
        paddingHorizontal: 5,
        borderRadius: 20
    },

    rewardContainer: {
        // borderWidth: 2,
        width: "95%",
        marginTop: "1%",
    }
});