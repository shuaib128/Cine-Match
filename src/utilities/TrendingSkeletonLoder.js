import React from 'react'
import { View } from 'react-native'
import SkeletonPlaceholder from "react-native-skeleton-placeholder"

export default function TrendingSkeletonLoder() {
    return (
        <SkeletonPlaceholder>
            <View style={{paddingHorizontal: 20, marginBottom: 35}}>
                <View style={{ height: 200, borderRadius: 5, }}></View>
                <View style={{ height: 40, marginTop: 10, borderRadius: 5, width: "80%" }}></View>
            </View>
        </SkeletonPlaceholder>
    )
}
