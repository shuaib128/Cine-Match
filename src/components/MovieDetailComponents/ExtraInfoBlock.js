import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { secondFontColor, thirdFontColor } from '../../utilities/GlobalStyles'

export default function ExtraInfoBlock(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.key}>{props.kei}: </Text>
            <Text style={styles.val}> {props.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 4,
    },
    key: {
        color: secondFontColor
    },
    val: {
        color: thirdFontColor
    }
});