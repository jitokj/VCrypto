import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const RankingScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Ranking Screen</Text>
        </View>
    )
}

export default RankingScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
