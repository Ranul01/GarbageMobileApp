import { View, Text, Image } from 'react-native'
import React from 'react'

export default function ServiceInfo({ service }) {
    return (
        <View>
            <Image
                source={{ uri: service?.imageUrl }}
                style={{
                    width: '100%',
                    height: 400,
                    objectFit: 'cover'
                }}
            />
        </View>
    )
}