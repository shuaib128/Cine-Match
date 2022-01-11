import React from 'react'
import {
    View, Text, StyleSheet, Image,
    Dimensions, TouchableOpacity
} from 'react-native'
import { mainFontColor, secondFontColor } from '../../utilities/GlobalStyles'
import Ionicons from "react-native-vector-icons/Ionicons"

const { width, height } = Dimensions.get("screen")
const iconSizes = 20

export default function Header(props) {
    return (
        <View style={styles.container}>
            <View style={styles.movie_images}>
                <Image
                    source={{
                        uri: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"
                            + props.Movie.poster_path
                    }}
                    style={[
                        StyleSheet.absoluteFillObject,
                        {
                            resizeMode: 'cover'
                        }
                    ]}
                />
            </View>

            <View style={styles.cat_blockt}>
                {props.Movie.genres.map((item) => (
                    <TouchableOpacity
                        activeOpacity={.7}
                    >
                        <Text key={item.id} style={styles.cat}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        overflow: 'visible'
    },
    movie_images: {
        width: width,
        height: height / 2
    },
    cat_blockt: {
        position: 'absolute',
        bottom: 20,
        left: 17,
        flexDirection: 'row',
        width: '75%',
        flexWrap: 'wrap'
    },
    cat: {
        backgroundColor: secondFontColor,
        color: "black",
        fontWeight: '600',
        marginRight: 10,
        fontSize: 13,
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop: 7
    }
});