import { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      const storedItems = await AsyncStorage.getItem('items');
      if (storedItems) setItems(JSON.parse(storedItems));
    };

    loadItems();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    setItems([...items, { ...item, id: Date.now() }]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const editItem = (updatedItem) => {
    setItems(items.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
  };

  return (
    <ItemContext.Provider value={{ items, addItem, deleteItem, editItem }}>
      {children}
    </ItemContext.Provider>
  );
};
