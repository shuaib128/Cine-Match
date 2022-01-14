import React from 'react'
import { View, Dimensions } from 'react-native'
import SkeletonPlaceholder from "react-native-skeleton-placeholder"

const { width, height } = Dimensions.get("screen")
export default function CastSkeleton() {
    return (
        <SkeletonPlaceholder>
            <View style={{flexDirection: 'row', marginBottom: 35, marginTop: 20 }}>
                <View style={{ height: 130, marginTop: 10, borderRadius: 5, width: width / 2, marginRight: 20 }}></View>
                <View style={{ height: 130, marginTop: 10, borderRadius: 5, width: width / 2 }}></View>
            </View>
        </SkeletonPlaceholder>
    )
}
