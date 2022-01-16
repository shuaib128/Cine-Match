import React from 'react'
import {
    View, Text, StyleSheet, Image,
    Dimensions, TouchableOpacity,
    Linking
} from 'react-native'
import { mainFontColor, secondFontColor } from '../../utilities/GlobalStyles';
import Ionicons from "react-native-vector-icons/Ionicons"

const { width, height } = Dimensions.get("screen")
const iconSizes = 20
export default function Header(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header_top}>
                <Image
                    source={{
                        uri: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${props.Person.profile_path}`
                    }}
                    style={styles.person_img}
                />

                <View style={styles.person_details}>
                    <Text style={styles.personal_name}>{props.Person.name}</Text>

                    <View style={styles.social_icons}>
                        <TouchableOpacity
                            activeOpacity={.7}
                            onPress={() =>
                                Linking.openURL(`https://www.instagram.com/${props.ExternalIDS.instagram_id}`)
                            }
                        >
                            <Ionicons
                                style={styles.Icon}
                                name="logo-instagram"
                                size={iconSizes}
                                color={mainFontColor}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={.7}
                            onPress={() =>
                                Linking.openURL(`https://www.facebook.com/${props.ExternalIDS.facebook_id}`)
                            }
                        >
                            <Ionicons
                                style={styles.Icon}
                                name="logo-facebook"
                                size={iconSizes}
                                color={mainFontColor}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={.7}
                            onPress={() =>
                                Linking.openURL(`https://www.twitter.com/${props.ExternalIDS.twitter_id}`)
                            }
                        >
                            <Ionicons
                                style={styles.Icon}
                                name="logo-twitter"
                                size={iconSizes}
                                color={mainFontColor}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.extra_infos}>
                        <View style={styles.bio_box}>
                            <Text style={styles.box_title}>Known For</Text>
                            <Text style={styles.box_value}>{props.Person.known_for_department}</Text>
                        </View>

                        <View style={styles.bio_box}>
                            <Text style={styles.box_title}>Gender</Text>
                            <Text style={styles.box_value}>
                                {
                                    props.Person.gender === 2 ? "Male" :
                                        props.Person.gender === 1 ? "Female" :
                                            "Others"
                                }
                            </Text>
                        </View>

                        <View style={styles.bio_box}>
                            <Text style={styles.box_title}>Birthday</Text>
                            <Text style={styles.box_value}>{props.Person.birthday}</Text>
                        </View>

                        <View style={styles.bio_box}>
                            <Text style={styles.box_title}>Place of Birth</Text>
                            <Text style={styles.box_value}>{props.Person.place_of_birth}</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.header_bio}>
                <Text style={styles.Comming_soon}>Biography</Text>
                <Text style={styles.bio_text}>{props.Person.biography}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 15,
        paddingTop: 20
    },
    header_top: {
        flexDirection: 'row'
    },
    header_bio: {
        marginTop: 15
    },
    person_img: {
        width: '40%',
        height: height / 3,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    person_details: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: '60%',
    },
    personal_name: {
        color: mainFontColor,
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 7
    },
    extra_infos: {

    },
    bio_box: {
        marginBottom: 7,
    },
    box_title: {
        color: secondFontColor,
        fontWeight: '600',
    },
    box_value: {
        color: mainFontColor,
    },
    social_icons: {
        flexDirection: 'row',
        marginBottom: 17
    },
    Icon: {
        marginRight: 10,
        borderStyle: "dashed",
        borderWidth: 1.3,
        borderColor: mainFontColor,
        padding: 10,
    },
    bio_text: {
        color: mainFontColor
    },
    Comming_soon: {
        color: mainFontColor,
        fontSize: 21,
        marginBottom: 10,
        fontWeight: "700"
    }
});