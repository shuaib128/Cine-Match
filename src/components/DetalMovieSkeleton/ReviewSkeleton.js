import React from 'react'
import { View } from 'react-native'
import SkeletonPlaceholder from "react-native-skeleton-placeholder"

export default function ReviewSkeleton() {
    return (
        <SkeletonPlaceholder>
            <View style={{ marginBottom: 35, marginTop: 20 }}>
                <View style={{ height: 200, marginTop: 10, borderRadius: 5, width: "100%" }}></View>
            </View>
        </SkeletonPlaceholder>
    )
}
