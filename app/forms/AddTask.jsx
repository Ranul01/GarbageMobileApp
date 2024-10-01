import { View, Text, StyleSheet, ScrollView, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import Colors from '../../constants/Colors'
import { Picker } from '@react-native-picker/picker'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'
import { TouchableOpacity } from 'react-native'

export default function AddTask() {

    const navigation = useNavigation()

    const [categoryList, setCategoryList] = useState([])

    const [formdata, setFormData] = useState({
        category: 'Tasks',
    })

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Add New Task'
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
            }}>Add New Taks</Text>

            <View>
                <Image
                    source={require('../../assets/images/task.png')}
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
                <Text style={styles.lable}>Address *</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => handleInputChange('address', value)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.lable}>Customer Name *</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => handleInputChange('customerName', value)}
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
                <Text style={styles.lable}>Task Manager's Name *</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => handleInputChange('managerName', value)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.lable}>Contact No  *</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => handleInputChange('valuePhone', value)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.lable}>Task Date *</Text>
                <TextInput
                    style={styles.input}
                    placeholder='DD/MM/YYYY'
                    onChangeText={(value) => handleInputChange('valueDate', value)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.lable}>Waste Type *</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => handleInputChange('valueWasteType', value)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.lable}>Approximate Weight *</Text>
                <TextInput
                    style={styles.input}
                    placeholder='KG'
                    onChangeText={(value) => handleInputChange('valueWeight', value)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.lable}>About *</Text>
                <TextInput
                    style={styles.input}
                    numberOfLines={5}
                    multiline={true}
                    placeholder='About Task'
                    onChangeText={(value) => handleInputChange('about', value)}
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