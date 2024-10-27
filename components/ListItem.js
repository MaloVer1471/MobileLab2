import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ListItem({ title, experience, image }) {
   return (
      <View style={styles.card}>
         <Text style={styles.title}>{title}</Text>
         <Text style={styles.experience}>{experience}</Text>
         <Image source={image} style={styles.image} />
      </View>
   );
}

const styles = StyleSheet.create({
   card: {
      padding: 20,
      margin: 10,
      backgroundColor: '#dbdbdb',
      borderRadius: 10,
      alignItems: 'center',
   },
   title: {
      fontSize: 50,
      fontWeight: 'bold',
   },
   experience: {
      fontSize: 24,
      color: '#555',
      marginVertical: 5,
   },
   image: {
      width: 150,
      height: 150,
      resizeMode: 'contain',
   },
});
