import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MarketScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>MarketScreen</Text>
        </View>
    )
}

export default MarketScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
