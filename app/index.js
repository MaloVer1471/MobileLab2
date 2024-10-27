import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem.js';

export default function App() {

  const programmingLanguages = [
    {
      id: '1',
      title: 'ASM',
      experience: '1 years',
      image: require('../assets/ASM_logo.png'),
    },
    {
      id: '2',
      title: 'C#',
      experience: '3 years',
      image: require('../assets/c_sharp_logo.webp'),
    },
    {
      id: '3',
      title: 'Python',
      experience: '2 year',
      image: require('../assets/python_logo.png'),
    },
  ];


  return (
    <View style={styles.container}>
      <FlatList
        data={programmingLanguages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            experience={item.experience}
            image={item.image}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 40,
  },
});
