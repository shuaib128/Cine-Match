import React from 'react'
import {
    View, Text, StyleSheet,
    Image, FlatList, Dimensions
} from 'react-native'
import { mainFontColor, secondFontColor, thirdFontColor } from '../../utilities/GlobalStyles'

const { width, height } = Dimensions.get("screen")
export default function Images(props) {
    return (
        <View>
            {props.Backdrops.backdrops.length !== 0 ?
                <View style={styles.container}>
                    <Text style={styles.Comming_soon}>Posters</Text>

                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={props.Backdrops.backdrops}
                        snapToInterval={width - 36 + 13}
                        decelerationRate="fast"
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.image}>
                                    <Image
                                        source={{
                                            uri: `https://www.themoviedb.org/t/p/w1066_and_h600_bestv2${item.file_path}`
                                        }}
                                        style={styles.actorImage}
                                    />
                                </View>
                            )
                        }}
                    />
                </View> :
                <View></View>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 25
    },
    image: {

    },
    Comming_soon: {
        color: mainFontColor,
        fontSize: 21,
        marginBottom: 15,
        fontWeight: "700"
    },
    actorImage: {
        width: width - 36,
        height: 200,
        borderRadius: 7,
        marginRight: 13,
        padding: 20,
    }
});