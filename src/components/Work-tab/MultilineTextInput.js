import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

const MultilineTextInput = (props) => {
  const [value, onChangeText] = React.useState(null);

  return (
    <View style={styles.containerStyle}>
      <AutoGrowingTextInput
        placeholder="Type your Organization goal"
        multiline
        numberOfLines={3} 
        maxLength={80}
        onChangeText={(text) => onChangeText(text)}
        style={styles.textStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomColor: '#000000',
    borderWidth: 1,
    marginHorizontal: 40,

  },
  textStyle: {
    padding: 5,
    fontSize: 45,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 52,
    letterSpacing: 0,
    textAlign: "left",
    color: "#6d503c",
  },
});

export default MultilineTextInput;
