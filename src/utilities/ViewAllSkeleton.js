import React from 'react'
import { View } from 'react-native'
import SkeletonPlaceholder from "react-native-skeleton-placeholder"

export default function ViewAllSkeleton() {
    return (
        <SkeletonPlaceholder>
            <View style={{ paddingHorizontal: 7, marginBottom: 35 }}>
                <View style={{marginTop: 30}}>
                    <View style={{ height: 200, borderRadius: 5, }}></View>
                    <View style={{ height: 40, marginTop: 10, borderRadius: 5, width: "80%" }}></View>
                </View>

                <View style={{marginTop: 30}}>
                    <View style={{ height: 200, borderRadius: 5, }}></View>
                    <View style={{ height: 40, marginTop: 10, borderRadius: 5, width: "80%" }}></View>
                </View>
            </View>
        </SkeletonPlaceholder>
    )
}
