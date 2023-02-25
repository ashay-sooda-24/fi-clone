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
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <FAB
                    title="<"
                    // placement="left"
                    size="small"
                    onPress={() => {
                        navigation.replace("Entry");
                    }}
                    style={{ top: 10, position: "absolute", zIndex: 999, }}
                />
            </View>

            <View style={styles.swiperContainer}>
                <Swiper
                    data={data}
                    isStaticPill={true}
                    style={styles}
                // renderItem={({ item }) => <>{item.component}</>}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    swiperContainer: {
        flex: 1,
        marginTop: 30,
        borderWidth: 2,
        zIndex: -1
    },
    swiper: {
        flex: 1,
    },


    //swiper specific styling========================
    pillButton: {
        backgroundColor: 'white',
    },
    pillActive: {
        backgroundColor: 'yellow',
    },
    pillLabel: {
        color: 'gray',
    },
    activeLabel: {
        color: 'white',
    },
});

export default MainScreen;
