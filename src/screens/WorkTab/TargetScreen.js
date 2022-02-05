import * as React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Title, Chip } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import GeneralTextInput from '../../components/general/GeneralTextInput';
import Spacer from '../../components/Helpers/Spacer';
import AppHeader from '../../components/Work-tab/AppHeader';
import { SafeAreaView } from 'react-native-safe-area-context';

const TargetScreen = () => {
  return (
    <SafeAreaView style={styles.parentwrapperStyle}>

      <AppHeader />
      <Spacer />
      <Spacer />
      <Spacer />

      <Card style={styles.cardStyle}>
        <Card.Content>
          <View style={styles.iconStyle}>
            <Chip
              mode='outlined'
              selectedColor="#e53a69"
              style={styles.chipStyle}
            >UI-UX</Chip>
            <MaterialIcons name="edit" size={18} color="#c5b4aa" />
          </View>
          <Spacer />

          <View>
            <Text style={styles.textStyle}>Create high fidelity MVP 2.0</Text>
            <Text style={{color: '#c5b4aa'}}>Term till Jan </Text>
          </View>
        </Card.Content>
      </Card>

      <View
        style={{
          borderLeftColor: "#c5b4aa",
          height: 60,
          borderLeftWidth: 1,
          left: "50%",
        }}
      ></View>

      <Card style={styles.cardStyle}>
        <Card.Content>
          <View style={styles.iconStyle}>
            <Title style={styles.cardTitle}>UI-UX TARGETS</Title>
            <MaterialIcons name="edit" size={18} color="#c5b4aa" />
          </View>
          <Spacer />

          <TouchableOpacity>
            <GeneralTextInput
              inputFor="TARGET 1"
              goalDescription="Complete all Screens for MVP 1.0"
              style={styles.textInputStyle}
            />
          </TouchableOpacity>
          <Spacer />
          <GeneralTextInput
            inputFor="TARGET 2"
            goalDescription="Complete all Screens for MVP 2.0"
          />
          <Spacer />
          <GeneralTextInput
            inputFor="TARGET 3"
            goalDescription="Make the final Display Prototype"
          />
          <Spacer />

          <View style={styles.iconStyle}>
            <Text
              style={{
                marginTop: 20,
                color: '#c5b4aa',
              }}
            >
              Term till Jan end 4w to go
            </Text>
            <AntDesign name="pluscircleo" size={48} color="#6d503c" />
          </View>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentwrapperStyle: {
    backgroundColor: "#fffbf7",
  },
  chipStyle: {
    backgroundColor: "#fffbf7",
    borderRadius: 16,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#e53a69"
  },
  textStyle: {
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 37,
    color: "#6d503c",
  },
  cardStyle: {
    backgroundColor: "#fffbf7",
    borderColor: "#6d503c",
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 20,
  },
  cardTitle: {
    color: "#6d503c",
    marginBottom: 28,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0.1,
    textAlign: "left",
  },
  textInputStyle: {
    color: "#6d503c",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0.1,
    textAlign: "left",
  },
  iconStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default TargetScreen;
