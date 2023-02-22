import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FAB } from "react-native-elements";

const MainScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <FAB
                title="<"
                placement="left"
                size="small"
                style={{ top: 50, width: "15%" }}
                onPress={() => {
                    navigation.replace('Entry');
                }}
            />
        </SafeAreaView>
    );
};

export default MainScreen;

const styles = StyleSheet.create({});
