import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

export default function ListItem({ service }) {
    return (
        <View style={{
            padding: 10,
            marginRight: 15,
            backgroundColor: Colors.WHITE,
            borderRadius: 10
        }}>
            <Image
                source={{ uri: service?.imageUrl }}
                style={{
                    width: 150,
                    height: 135
                }}
            />

            <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 18,
                marginTop: 10
            }}>{service?.make || service?.customerName}</Text>

            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Text style={{
                    fontFamily: 'outfit',
                    color: Colors.GRAY,

                }}>{service?.name || service?.address}</Text>

                <Text style={{
                    fontFamily: 'outfit',
                    color: '#880808',
                    paddingHorizontal: 7,
                    borderRadius: 10,
                    fontSize: 11,
                    backgroundColor: '#DC143C'
                }}>{service?.curbWeight || service?.dates}</Text>
            </View>
        </View>
    )
}