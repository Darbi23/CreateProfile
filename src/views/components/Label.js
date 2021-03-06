import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon as Ico } from 'react-native-elements';

const Label = ({ text, iconName, iconType }) => {
  return (
    <View style={styles.layer}>
      <Ico style={{ marginRight: 30 }} name={iconName} type={iconType} color="#000099"/>
      <Text style={{ fontSize: 18}}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  layer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    borderBottomWidth: 1, 
    borderColor: '#686868', 
    height: 60,  
    width: '100%'
  }
});

export default Label;