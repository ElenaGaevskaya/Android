import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App2 = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Button
        color="#3b1512"
        title="tap here"
        onPress={() => Alert.alert('cool :)')}
      />
    </View>
    <Separator />

    
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  separator: {
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App2;