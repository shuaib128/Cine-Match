import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { thirdFontColor } from '../utilities/GlobalStyles'
import Ionicons from "react-native-vector-icons/Ionicons"

export default function Footer(props) {
    const iconSizes = 24

    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={.7}
                onPress={() => {
                    props.navigation && props.navigation.navigate('HomeScreen')
                }}
            >
                <View style={[styles.footer_btns, styles.footer_btns_home]}>
                    <Ionicons
                        style={styles.searchIcon}
                        name="home-outline"
                        size={iconSizes}
                        color={thirdFontColor}
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={.7}
            >
                <View style={styles.footer_btns}>
                    <Ionicons
                        style={styles.searchIcon}
                        name="search"
                        size={iconSizes}
                        color={thirdFontColor}
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={.7}
            >
                <View style={styles.footer_btns}>
                    <Ionicons
                        style={styles.searchIcon}
                        name="folder-outline"
                        size={iconSizes}
                        color={thirdFontColor}
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={.7}
            >
                <View style={styles.footer_btns}>
                    <Ionicons
                        style={styles.searchIcon}
                        name="person-outline"
                        size={iconSizes}
                        color={thirdFontColor}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        bottom: 0,
        width: '100%',
        paddingVertical: 10,
        backgroundColor: '#1f2123',
        paddingHorizontal: 30,
        justifyContent: 'space-between'
    },
    footer_btns: {
        padding: 5,
        paddingHorizontal: 6,
        borderRadius: 6
    },
    footer_btns_home:{
        color: 'black'
    }
});