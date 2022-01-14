import React from 'react'
import { View, Dimensions } from 'react-native'
import SkeletonPlaceholder from "react-native-skeleton-placeholder"

const { width, height } = Dimensions.get("screen")
export default function HeaderSkeleton() {
    return (
        <SkeletonPlaceholder>
            <View style={{height: height / 2, paddingHorizontal: 20, marginBottom: 35}}>
                
            </View>
        </SkeletonPlaceholder>
    )
}
