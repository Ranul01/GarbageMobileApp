import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import ServicesByCategory from '../../components/Home/ServicesByCategory'

export default function Home() {
    return (
        <View>
            {/* Header */}
            <Header />

            {/* Slider */}
            <Slider />

            {/*List of Services + Category */}
            <ServicesByCategory />

            {/* Add new Truck */}
        </View>
    )
}