import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FAB } from "react-native-elements";
import FirstScreen from "../components/MainScreenComps/FirstScreen";
import SecondScreen from "../components/MainScreenComps/SecondScreen";
import Swiper from "react-native-screens-swiper";
import Ionicons from '@expo/vector-icons/Ionicons'

const MainScreen = ({ navigation }) => {
    const data = [
        {
            tabLabel: <Ionicons name='search' size={24} color="black" />,
            component: FirstScreen,
        },
        {
            tabLabel: <Ionicons name='alarm' size={24} color="black" />,
            component: SecondScreen,
            props: {}, // (optional) additional props
        },
        {
            tabLabel: <Ionicons name='body' size={24} color="black" />,
            component: SecondScreen,
            props: {}, // (optional) additional props
        },
        {
            tabLabel: <Ionicons name='football' size={24} color="black" />,
            component: SecondScreen,
            props: {}, // (optional) additional props
        },
        {
            tabLabel: <Ionicons name='clipboard' size={24} color="black" />,
            component: SecondScreen,
            props: {}, // (optional) additional props
        },
        {
            tabLabel: <Ionicons name='moon' size={24} color="black" />,
            component: SecondScreen,
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
                    isStaticPill={false}
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
