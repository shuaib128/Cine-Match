import React from 'react'
import {
    View, Text, StyleSheet,
    FlatList, Image, Dimensions, TouchableOpacity
} from 'react-native'
import { mainFontColor, secondFontColor, thirdFontColor } from '../../utilities/GlobalStyles'

const { width, height } = Dimensions.get("screen")
export default function Reviews(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.Comming_soon}>Reviews</Text>

            <FlatList
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={props.Reviewes.results}
                snapToInterval={width - 36 + 13}
                decelerationRate="fast"
                renderItem={({ item }) => {
                    return (
                        <View style={styles.review}>
                            <View style={styles.review_header}>
                                <Image
                                    source={{
                                        uri: item.author_details.avatar_pathitem &&
                                            item.author_details.avatar_path.includes("https://secure.gravatar.com") ?
                                            item.author_details.avatar_path.substring(1) :
                                            item.author_details.avatar_pathitem && !item.author_details.avatar_path.includes("https://secure.gravatar.com") ?
                                                `https://www.themoviedb.org/t/p/w128_and_h128_face/${item.author_details.avatar_path}` :
                                                "https://picsum.photos/id/870/200/300?grayscale&blur=2"
                                    }}
                                    style={styles.actorImage}
                                />

                                <View style={styles.review_header_right}>
                                    <Text style={styles.reviewrer_name}>
                                        {item.author}
                                    </Text>
                                    <Text style={styles.reviewrer_date}>
                                        Written by <Text style={{ fontWeight: "600", color: "black" }}>{item.author}</Text> on {item.updated_at.slice(0, 10)}
                                    </Text>
                                </View>
                            </View>

                            <Text style={styles.review_content}>
                                {item.content.slice(0, 300)}...
                                <Text style={{ color: secondFontColor, borderBottomColor: secondFontColor, fontWeight: '700' }}>  Load More</Text>
                            </Text>
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
        width: width - 36,
        borderRadius: 7,
        marginRight: 13,
        backgroundColor: mainFontColor,
        padding: 20,
    },
    review_header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    actorImage: {
        width: 60,
        height: 60,
        borderRadius: 100
    },
    review_header_right: {
        marginLeft: 15
    },
    review_header_name_ratting: {},
    reviewrer_name: {
        fontSize: 18,
        fontWeight: '700',
        color: 'black'
    },
    reviewrer_review: {},
    reviewrer_date: {},
    review_content: {
        marginTop: 17,
        marginLeft: 10,
        color: "black",
    }
});