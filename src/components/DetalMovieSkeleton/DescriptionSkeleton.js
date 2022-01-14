import React from 'react'
import { View } from 'react-native'
import SkeletonPlaceholder from "react-native-skeleton-placeholder"

export default function DescriptionSkeleton() {
    return (
        <SkeletonPlaceholder>
            <View style={{marginBottom: 35 }}>
                <View style={{ height: 25, marginTop: 10, borderRadius: 5, width: "20%" }}></View>
                <View style={{ height: 25, marginTop: 10, borderRadius: 5, width: "30%" }}></View>
                <View style={{ height: 200, marginTop: 15, borderRadius: 5, width: "100%" }}></View>
            </View>
        </SkeletonPlaceholder>
    )
}
