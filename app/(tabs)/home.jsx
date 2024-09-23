import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import ServicesByCategory from '../../components/Home/ServicesByCategory'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'
import { TouchableOpacity } from 'react-native'
import Category from '../../components/Home/Category'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../constants/Colors'

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
            <TouchableOpacity style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
                gap: 20,
                marginTop: 20,
                backgroundColor: Colors.LIGHT_PRIMARY,
                borderWidth: 1,
                borderColor: Colors.LIGHT_PRIMARY,
                borderRadius: 15,
                borderStyle: 'dashed'
            }}>
                <Ionicons name="add-circle-sharp" size={24} color={Colors.PRIMARY} />
                <Text style={{
                    fontFamily: 'outfit',
                    color: Colors.PRIMARY
                }}>{renderButtonLabe()}</Text>
            </TouchableOpacity>

        </View>
    )
}