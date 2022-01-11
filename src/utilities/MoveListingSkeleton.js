import React from 'react'
import { View } from 'react-native'
import SkeletonPlaceholder from "react-native-skeleton-placeholder"

export default function MoveListingSkeleton() {
    return (
        <SkeletonPlaceholder>
            <View style={{ paddingHorizontal: 10, marginBottom: 20, marginTop: 10 }}>
                <View style={{ height: 200, borderRadius: 5, }}></View>
                <View style={{ height: 40, marginTop: 10, borderRadius: 5, width: "80%" }}></View>
                <View style={{ height: 40, marginTop: 10, borderRadius: 5, width: "20%" }}></View>
            </View>
        </SkeletonPlaceholder>
    )
}
