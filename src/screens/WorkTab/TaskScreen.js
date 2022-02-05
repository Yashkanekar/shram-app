import * as React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Title, Chip } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import GeneralTextInput from '../../components/general/GeneralTextInput';
import Spacer from '../../components/Helpers/Spacer';
import AppHeader from '../../components/Work-tab/AppHeader';
import { SafeAreaView } from 'react-native-safe-area-context';

const TaskScreen = () => {
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
            <Text style={{ color: '#c5b4aa' }}>Term till Jan </Text>
          </View>
        </Card.Content>
      </Card>

      <View style={{
        borderLeftColor: '#c5b4aa',
        height: 60,
        borderLeftWidth: 1,
        left: '50%',
      }}></View>
      <View style={{
        borderBottomColor: '#c5b4aa',
        borderBottomWidth: 1,
      }}></View>

      <View style={styles.targetStyleWrapper}>
        <View style={styles.targetStyle}>
          <Text>TARGET 1 | </Text>
          <Text>TARGET 2</Text>
        </View>
        <MaterialIcons name="zoom-out-map" size={18} color="#c5b4aa" />
      </View>

      <Text style={{
        color: '#6d503c',
        fontSize: 18,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 22,
        letterSpacing: 0.1,
        marginTop: 22,
      }}>Complete all Screens for MVP 2.0</Text>

      <ScrollView horizontal={true}>

        <Text>Child 1</Text>
        <Text>Child 2</Text>
        <Text>Child 3</Text>
        <Text>Child 4</Text>
        <Text>Child 5</Text>
        <Text>Child 6</Text>
        <Text>Child 7</Text>
        <Text>Child 8</Text>
        <Text>Child 9</Text>
        <Text>Child 10</Text>
        <Text>Child 11</Text>
        <Text>Child 12</Text>

      </ScrollView>

      {/* <MaterialIcons name="filter-list" size={24} color="black" /> */}
    </SafeAreaView>
  )
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
    color: '#6d503c',
  },
  cardStyle: {
    backgroundColor: "#fffbf7",
    borderColor: '#6d503c',
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 20,
  },
  iconStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  targetStyleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  targetStyle: {
    flexDirection: 'row',
  },
});

export default TaskScreen;