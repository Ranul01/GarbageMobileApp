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
                    icon={service?.passengerImage || service?.imageDate}
                    title={service?.titlePassenger || service?.titleDate}
                    value={service?.passengers || service?.valueDate}
                />

                <ServiceSubInfoCard
                    icon={service?.weightImage || service?.imagePhone}
                    title={service?.titleWeight || service?.titlePhone}
                    value={service?.curbWeight || service?.valuePhone}
                />
            </View>

            <View style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <ServiceSubInfoCard
                    icon={service?.fuelImage || service?.imageWaste}
                    title={service?.titleFuelType || service?.titleWasteType}
                    value={service?.fuel || service?.valueWasteType}
                />

                <ServiceSubInfoCard
                    icon={service?.powerImage || service?.imageWasteWeight}
                    title={service?.titlePower || service?.titleWasteWeight}
                    value={service?.power || service?.valueWeight}
                />
            </View>
        </View>
    )
}