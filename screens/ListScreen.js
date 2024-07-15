import { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { ItemContext } from '../context/ItemContext';
import { useNavigation } from '@react-navigation/native';

const ListScreen = () => {
  const { items, deleteItem } = useContext(ItemContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.itemDetails}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Edit"
                onPress={() => navigation.navigate('EditItem', { item })}
              />
              <Button
                title="Delete"
                onPress={() => deleteItem(item.id)}
                color="red"
              />
            </View>
          </View>
        )}
      />
      <Button
        title="Add Item"
        onPress={() => navigation.navigate('AddItem')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemDetails: {
    flex: 1,
  },
  itemText: {
    fontSize: 18,
  },
  itemDescription: {
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default ListScreen;
