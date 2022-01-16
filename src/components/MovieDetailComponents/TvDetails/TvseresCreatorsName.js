import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { secondFontColor, thirdFontColor } from '../../../utilities/GlobalStyles'

export default function TvseresCreatorsName(props) {
    return (
        <View>
            {props.value.length !== 0 ?
                <View style={styles.container}>
                    <Text style={styles.key}>{props.kei}: </Text>
                    <Text style={styles.val}> {props.value}</Text>
                </View> :
                <View></View>
            }
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