import React from 'react'
import {
    View, Text, StyleSheet, TouchableOpacity,
    Linking
} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import { mainFontColor, secondFontColor, thirdFontColor } from '../../utilities/GlobalStyles'
import ExtraInfoBlock from './ExtraInfoBlock'
import TvseresCreatorsName from './TvDetails/TvseresCreatorsName'

function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    if (rhours !== 0) {
        return rhours + "h " + rminutes + "m";
    } else {
        return rminutes + "m";
    }
}

export default function Descridtions(props) {
    const crew = props.CastAndCrew.crew

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={styles.des_header}>
                    <View style={styles.reviewblock}>
                        <Ionicons
                            style={styles.searchIcon}
                            name="star"
                            size={15}
                            color={secondFontColor}
                        />
                        <Text style={styles.vote_average}>{props.Movie.vote_average}</Text>
                    </View>
                    <Text style={styles.runtime}>
                        {
                            props.Movie.runtime ? timeConvert(props.Movie.runtime) :
                                props.Movie.episode_run_time ? timeConvert(props.Movie.episode_run_time) :
                                    ""
                        }
                    </Text>
                    <Text style={styles.runtime}>18+</Text>
                </View>

                <View style={styles.add_message}>
                    <TouchableOpacity
                        activeOpacity={.7}
                    >
                        <Ionicons
                            style={styles.searchIcon}
                            name="add-circle-outline"
                            size={23}
                            color={mainFontColor}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={.7}
                    >
                        <Ionicons
                            style={styles.searchIconRight}
                            name="paper-plane-outline"
                            size={23}
                            color={mainFontColor}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.title}>
                {
                    props.Movie.title ? props.Movie.title :
                        props.Movie.name ? props.Movie.name :
                            ''
                }
            </Text>
            <Text style={styles.homepage}
                onPress={() => Linking.openURL(props.Movie.homepage)}
            >
                Visit homepage
            </Text>
            <Text style={styles.des}>{props.Movie.overview}</Text>

            <View style={styles.extra_infos}>
                {props.Movie.created_by ?
                    <TvseresCreatorsName
                        kei="Director"
                        link={false}
                        value={
                            props.Movie.created_by.map((charcter) => {
                                return (`${charcter.name}  |  `);
                            })
                        }
                    /> :
                    <ExtraInfoBlock
                        kei="Director"
                        link={false}
                        value={
                            crew.map((charcter) => {
                                if (charcter.job === "Director") {
                                    return (charcter.name);
                                }
                            })
                        }
                    />
                }

                <ExtraInfoBlock
                    kei="Release Date"
                    link={false}
                    value={
                        props.Movie.release_date ? props.Movie.release_date :
                            props.Movie.first_air_date ? props.Movie.first_air_date :
                                ''
                    }
                />

                <ExtraInfoBlock
                    kei="Status"
                    link={false}
                    value={props.Movie.status}
                />

                {props.Movie.tagline ?
                    <ExtraInfoBlock
                        kei="Tagline"
                        link={false}
                        value={props.Movie.tagline}
                    /> :
                    <View></View>
                }

                {props.Movie.budget !== 0 && props.Movie.budget !== undefined ?
                    <ExtraInfoBlock
                        kei="Buget"
                        link={false}
                        value={`$${props.Movie.budget}`}
                    /> :
                    <View></View>
                }
                
                {props.Movie.revenue !== 0 && props.Movie.revenue !== undefined ?
                    <ExtraInfoBlock
                        kei="Revenue"
                        link={false}
                        value={`$${props.Movie.revenue}`}
                    /> :
                    <View></View>
                }
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
    },
    des_header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    reviewblock: {
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: "black",
        padding: 9,
        paddingHorizontal: 14,
        borderRadius: 4
    },
    vote_average: {
        color: mainFontColor,
        marginLeft: 5
    },
    runtime: {
        color: mainFontColor,
        marginLeft: 15
    },
    title: {
        color: mainFontColor,
        fontSize: 18,
        marginTop: 20
    },
    homepage: {
        color: mainFontColor,
        borderBottomColor: mainFontColor,
        borderBottomWidth: 1,
        width: 85,
        fontSize: 12,
        marginBottom: 5
    },
    des: {
        color: mainFontColor,
        fontSize: 15,
        marginTop: 8,
        color: thirdFontColor,
        lineHeight: 20,
        width: '100%'
    },
    add_message: {
        flexDirection: 'row'
    },
    searchIconRight: {
        marginLeft: 15
    },
    extra_infos: {
        marginTop: 10
    }
});