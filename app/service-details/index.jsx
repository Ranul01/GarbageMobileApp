import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import ServiceInfo from '../../components/ServiceDetails/ServiceInfo'
import ServiceSubInfo from '../../components/ServiceDetails/ServiceSubInfo'
import AboutService from '../../components/ServiceDetails/AboutService'

export default function ServiceDetails() {

    const service = useLocalSearchParams()
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            headerTitle: ' '
        })
    })
    return (
        <View>
            {/* service info */}
            <ServiceInfo service={service} />

            {/* service properties */}
            <ServiceSubInfo service={service} />

            {/* about */}
            <AboutService service={service} />

            {/* owner details */}


            {/* Hire the vehicle button */}
        </View>
    )
}