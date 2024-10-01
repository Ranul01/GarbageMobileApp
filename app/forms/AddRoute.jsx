import { View, Text, StyleSheet, ScrollView, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import Colors from '../../constants/Colors'
import { Picker } from '@react-native-picker/picker'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'
import { TouchableOpacity } from 'react-native'

export default function AddRoute() {

    const navigation = useNavigation()

    const [categoryList, setCategoryList] = useState([])

    const [formdata, setFormData] = useState({
        category: 'Routes',
    })

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Add New Route'
        })
        getCategories()
    }, [])

    //Handling the form inputs
    const handleInputChange = (fieldName, fieldValue) => {
        setFormData(prev => ({
            ...prev,
            [fieldName]: fieldValue
        }))
    }

    //Getting the categories from the database
    const getCategories = async () => {
        setCategoryList([])
        const snapshot = await getDocs(collection(db, 'GarbageCategory'))
        snapshot.forEach((doc) => {
            setCategoryList(categoryList => [...categoryList, doc.data()])
        })
    }
    return (
        <ScrollView style={{
            padding: 20
        }}>
            <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 20
            }}>Add New Route</Text>

            <View>
                <Image
                    source={require('../../assets/images/routes.png')}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 15,
                        borderWidth: 1,
                        borderColor: Colors.GRAY,
                        backgroundColor: Colors.GRAY
                    }}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.lable}>Starting area - Ending area *</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => handleInputChange('name', value)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.lable}>District *</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => handleInputChange('make', value)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.lable}>Service Category *</Text>
                <Picker
                    style={styles.input}
                    onValueChange={(itemValue, itemIndex) => {
                        handleInputChange('category', itemValue)
                    }}
                >
                    {categoryList.map((category, index) => (
                        <Picker.Item key={index} label={category.name} value={category.name} />
                    ))}
                </Picker>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.lable}>Driver Name *</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => handleInputChange('valueDriver', value)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.lable}>Contact No  *</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => handleInputChange('valueContact', value)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.lable}>Service Dates *</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => handleInputChange('dates', value)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.lable}>Vehicle No *</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => handleInputChange('valueVehicleNo', value)}
                />
            </View>

            <TouchableOpacity style={styles.button} >
                <Text style={{
                    fontFamily: 'outfit',
                    textAlign: 'center',
                    fontSize: 15
                }}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 5,
        // padding: 10
    },

    input: {
        padding: 10,
        backgroundColor: Colors.WHITE,
        borderRadius: 7,
        fontFamily: 'outfit'
    },

    lable: {
        marginVertical: 5,
        fontFamily: 'outfit'
    },

    button: {
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 10,
        marginVertical: 10,
        marginBottom: 50
    }
})