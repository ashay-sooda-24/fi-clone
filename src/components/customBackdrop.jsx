import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import Header from './customBackdrop/Header'
import BodyCenter from './customBackdrop/BodyCenter'

const customBackdrop = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <BodyCenter />
        </SafeAreaView>
    )
}

export default customBackdrop

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        // borderColor: "white",
        height: "50%"
    }
})