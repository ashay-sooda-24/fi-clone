import { StatusBar } from "expo-status-bar";
import { useCallback, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CustomFooter from "../components/CustomFooter";
import customBackdrop from "../components/customBackdrop";


const EntryScreen = ({ navigation }) => {
    const snapPoints = useMemo(() => ["15%", "50%", "95%"], []);

    // const defaultSnap = 1;
    // console.log('yoooooo')

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
                            <Text>Awesome</Text>
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
    },
});