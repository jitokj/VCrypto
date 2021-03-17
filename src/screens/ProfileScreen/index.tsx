import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ProfileScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>ProfileScreen</Text>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
