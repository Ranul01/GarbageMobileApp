import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import ServiceInfo from '../../components/ServiceDetails/ServiceInfo'
import ServiceSubInfo from '../../components/ServiceDetails/ServiceSubInfo'
import AboutService from '../../components/ServiceDetails/AboutService'
import ContactInfo from '../../components/ServiceDetails/ContactInfo'
import { TouchableOpacity } from 'react-native'
import Colors from '../../constants/Colors'

export default function ServiceDetails() {

    const service = useLocalSearchParams()
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            headerTitle: ' '
        })
    })

    const isTruck = service?.category === 'Trucks'

    return (
        <View style={{
            height: '100vh' // need to use vh because when its running on web need to have a fixed height
        }}>
            <ScrollView>
                {/* service info */}
                <ServiceInfo service={service} />

                {/* service properties */}
                <ServiceSubInfo service={service} />

                {/* about */}
                <AboutService service={service} />

                {/* owner details */}
                <ContactInfo service={service} />
                <View style={{
                    height: 70
                }}></View>
            </ScrollView>


            {/* Hire the vehicle button */}
            {isTruck && (
                <View style={
                    styles.bottomContainer
                }>
                    <TouchableOpacity style={
                        styles.hireBtn
                    }>
                        <Text style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 20,
                            textAlign: 'center',
                        }}>Hire Truck</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    hireBtn: {
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 50,
        width: '90%',
        alignSelf: 'center',
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 6,
        left: 0,
        right: 0,
        paddingHorizontal: 20

    }
})