import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import GeneralTextInput from '../../components/general/GeneralTextInput';
import Spacer from '../../components/Helpers/Spacer';
import { TouchableOpacity } from 'react-native-gesture-handler';

const UnitGoalsScreen = () => (
  <Card style={styles.cardStyle}>
    <Card.Content >
      <View style={styles.iconStyle}>
        <Title style={styles.cardTitle}>UNIT GOALS</Title>
        <MaterialIcons name="edit" size={18} color="#c5b4aa" />
      </View>
      <Spacer />

      <TouchableOpacity>
        <GeneralTextInput inputFor="RESEARCH" goalDescription="Validate User requirements" style={styles.textInputStyle} />
      </TouchableOpacity>
      <Spacer />
      <GeneralTextInput inputFor="TECH" goalDescription="Build Foundation for Shram MVP" />
      <Spacer />
      <GeneralTextInput inputFor="UI-UX" goalDescription="Create high fidelity MVP 2.0" />
      <Spacer />
      <GeneralTextInput inputFor="MARKETING" goalDescription="Create brand presence" />
      <Spacer />
      <GeneralTextInput inputFor="ADMIN" goalDescription="Build a strong team and onboard everyone completely" />
      <Spacer />


      <View style={styles.iconStyle}>
        <Text
          style={{
            marginTop: 20,
            color: '#6d503c',
            // multiline: 'true',
          }}
        >Term till Jan end 4w to go</Text>
        <AntDesign name="pluscircleo" size={54} color="#6d503c" />
      </View>

    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  cardStyle: {
    borderColor: '#6d503c',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 60,
    margin: 20,
  },
  cardTitle: {
    color: '#6d503c',
    marginBottom: 28,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0.1,
    textAlign: "left",
  },
  textInputStyle: {
    color: '#6d503c',
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0.1,
    textAlign: "left",
  },
  iconStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});


export default UnitGoalsScreen;