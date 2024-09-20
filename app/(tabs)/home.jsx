import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import ServicesByCategory from '../../components/Home/ServicesByCategory'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'
import { TouchableOpacity } from 'react-native'
import Category from '../../components/Home/Category'

export default function Home() {

    const [selectedCategory, setSelectedCategory] = useState('Trucks')

    const renderButtonLabe = () => {
        if (selectedCategory === 'Trucks') {
            return 'Add new Truck'
        } else if (selectedCategory === 'Routes') {
            return 'Add new Route'
        } else if (selectedCategory === 'Tasks') {
            return 'Add new Task'
        } else {
            return `Add new ${selectedCategory}`
        }
    }

    return (
        <View style={{
            padding: 20,
            marginTop: 20
        }}>
            {/* Header */}
            <Header />

            {/* Slider */}
            <Slider />

            {/* category selection */}
            <Category category={(name) => setSelectedCategory(name)} />

            {/*List of Services + Category */}
            <ServicesByCategory selectedCategory={selectedCategory} />



            {/* Add new Truck */}
            <TouchableOpacity>
                <Text>{renderButtonLabe()}</Text>
            </TouchableOpacity>

        </View>
    )
}