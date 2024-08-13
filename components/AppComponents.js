import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

export const SearchableSketchfabAssetList = ({ sketchfab, onCancelPress, onAssetPress }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const search = async () => {
    const assets = await sketchfab.searchModels(query);
    setResults(assets);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', padding: 10 }}>
        <TextInput
          style={{ flex: 1, borderColor: 'gray', borderWidth: 1, padding: 10 }}
          placeholder="Search for assets"
          value={query}
          onChangeText={setQuery}
        />
        <Button title="Search" onPress={search} />
      </View>
      <FlatList
        data={results}
        keyExtractor={item => item.uid}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onAssetPress(item)}>
            <View style={{ padding: 10 }}>
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <Button title="Cancel" onPress={onCancelPress} />
    </View>
  );
};
