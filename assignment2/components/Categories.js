import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const categories = [
  { key: '1', name: 'Exercise', tasks: 12, image: require('../assets/exercise.png') },
  { key: '2', name: 'Study', tasks: 12, image: require('../assets/study.png') },
  { key: '3', name: 'Code', tasks: 15, image: require('../assets/code.png') },
  { key: '4', name: 'Cook', tasks: 8, image: require('../assets/cook.png') },
  { key: '5', name: 'Read', tasks: 10, image: require('../assets/read.png') },
  { key: '6', name: 'Shop', tasks: 7, image: require('../assets/shop.png') },
  { key: '7', name: 'Workout', tasks: 14, image: require('../assets/workout.png') },
  { key: '8', name: 'Travel', tasks: 6, image: require('../assets/travel.png') },
];

const CategoryItem = ({ category }) => (
  <View style={styles.categoryItem}>
    <Image source={category.image} style={styles.categoryImage} />
    <Text>{category.name}</Text>
    <Text>{category.tasks} Tasks</Text>
  </View>
);

const Categories = () => {
  return (
    <View style={styles.categoriesContainer}>
      <Text style={styles.categoriesHeader}>Categories</Text>
      <FlatList
        horizontal
        data={categories}
        renderItem={({ item }) => <CategoryItem category={item} />}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    marginVertical: 20,
  },
  categoriesHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default Categories;
