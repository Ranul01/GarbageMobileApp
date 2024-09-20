import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Category from './Category'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'
import ListItem from './ListItem'

export default function ServicesByCategory() {

    const [serviceList, setServiceList] = useState([])

    useEffect(() => {
        getServiceList('Trucks')
    }, [])

    const getServiceList = async (category) => {

        setServiceList([])

        const q = query(collection(db, 'Services'), where('category', '==', category))
        const querySnapshot = await getDocs(q)

        querySnapshot.forEach(doc => {
            setServiceList(serviceList => [...serviceList, doc.data()])
        })
    }
    return (
        <View>
            <Category category={(value) => getServiceList(value)} />
            <FlatList
                data={serviceList}
                style={{ marginTop: 10 }}
                horizontal={true}
                renderItem={({ item, index }) => (
                    <ListItem service={item} />
                )}
            />
        </View>
    )
}