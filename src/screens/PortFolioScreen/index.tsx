import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PortFolioScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>PortFolioScreen</Text>
        </View>
    )
}

export default PortFolioScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
