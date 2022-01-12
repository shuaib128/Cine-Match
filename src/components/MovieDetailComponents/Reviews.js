import React from 'react'
import {
    View, Text, StyleSheet,
    FlatList, Image
} from 'react-native'
import { mainFontColor, thirdFontColor } from '../../utilities/GlobalStyles'

export default function Reviews(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.Comming_soon}>Reviews</Text>

            <FlatList
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={props.Reviewes.results}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.review}>
                            <View style={styles.review_header}>
                                <Image
                                    source={{
                                        uri: item.author_details.avatar_path.includes("https://secure.gravatar.com") ?
                                            item.author_details.avatar_path.substring(1) :
                                            `https://www.themoviedb.org/t/p/w128_and_h128_face/${item.author_details.avatar_path}`
                                    }}
                                    style={styles.actorImage}
                                />
                            </View>

                            <View style={styles.review_header}>

                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 25
    },
    Comming_soon: {
        color: mainFontColor,
        fontSize: 21,
        marginBottom: 15,
        fontWeight: "700"
    },
    review: {
        // backgroundColor: mainFontColor
    },
    review_header: {},
    review_header: {},
    actorImage: {
        width: 100,
        height: 100,
        borderRadius: 100
    }
});