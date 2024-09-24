import { View, Text } from 'react-native'
import React from 'react'
import ServiceSubInfoCard from './ServiceSubInfoCard'

export default function ServiceSubInfo({ service }) {
    return (
        <View style={{
            padding: 20
        }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <ServiceSubInfoCard
                    icon={service?.passengerImage}
                    title={'Passengers'}
                    value={service?.passengers}
                />

                <ServiceSubInfoCard
                    icon={require('../../assets/images/weight.png')}
                    title={('Weight')}
                    value={service?.curbWeight}
                />
            </View>

            <View style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <ServiceSubInfoCard
                    icon={require('../../assets/images/fuel.png')}
                    title={'Fuel Type'}
                    value={service?.fuel}
                />

                <ServiceSubInfoCard
                    icon={require('../../assets/images/piston.png')}
                    title={'Power'}
                    value={service?.power}
                />
            </View>
        </View>
    )
}