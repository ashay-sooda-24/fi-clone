import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FAB } from "react-native-elements";
import FirstComponents from "../components/MainScreenComps/FirstComponents";
import SecondScreen from "../components/MainScreenComps/SecondScreen";
import Swiper from "react-native-screens-swiper";

const MainScreen = ({ navigation }) => {
    const data = [
        {
            tabLabel: "Valid component in form of JSX element",
            component: FirstComponents,
        },
        {
            tabLabel: "Valid component in form of React component",
            component: SecondScreen,
            props: {}, // (optional) additional props
        },
        {
            tabLabel: "Valid component in form of render function",
            component: ({ index, ...props }) => {
                return null;
            },
            props: {}, // (optional) additional props
        },
    ];

    return (
        <SafeAreaView>
            <FAB
                title="<"
                placement="left"
                size="small"
                style={{ top: 50, width: "15%", zIndex: 99 }}
                onPress={() => {
                    navigation.replace("Entry");
                }}
            />

            <Swiper
                data={data}
                isStaticPill={true}
                style={styles}

            // renderItem={({ item }) => (item.component)}
            />
        </SafeAreaView>
    );
};

export default MainScreen;

// const styles = StyleSheet.create({});
const styles = {
    pillContainer: {
        borderWidth: 2,
        marginTop: "5%",
    },
    pillButton: {
        backgroundColor: "white",
    },
    pillActive: {
        backgroundColor: "yellow",
    },
    pillLabel: {
        color: "gray",
    },
    activeLabel: {
        color: "white",
    },
};
