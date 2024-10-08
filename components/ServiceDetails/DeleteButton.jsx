import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import Colors from '../../constants/Colors';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';

const DeleteButton = ({ service }) => {
  const router = useRouter();

  const deleteService = async (serviceId) => {
    try {
        const serviceRef = doc(db, 'Services', serviceId)
        await deleteDoc(serviceRef)
        console.log('Service deleted successfully')
    } catch (error) {
        console.log('Error deleting service:', error)
    }
  }
  const handleDelete = () => {
    if (service) {
      deleteService(service.id); // Call your delete function with the service id
      router.push('/home')
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        style={{
          padding: 12,
          backgroundColor: Colors.DANGER, // Assuming a red color for delete
          borderRadius: 50,
          marginTop: 10,
          width: '70%',
        }}
        onPress={handleDelete}
      >
        <Text style={{ 
          fontFamily: 'outfit-medium',
          fontSize: 15,
          color: 'white',
          textAlign: 'center'
        }}>
          Delete {service?.category || 'Service'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeleteButton;
