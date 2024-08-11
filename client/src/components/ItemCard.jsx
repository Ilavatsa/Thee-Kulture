import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ItemCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    color: '#FFD700',
    marginVertical: 10,
  },
  description: {
    color: '#FFFFFF',
  },
});

export default ItemCard;

