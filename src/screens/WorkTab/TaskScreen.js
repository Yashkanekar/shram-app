import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Title, Chip } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Spacer from '../../components/Helpers/Spacer';
import AppHeader from '../../components/Work-tab/AppHeader';
import TaskCard from '../../components/Work-tab/TaskCard';
import { SafeAreaView } from 'react-native-safe-area-context';

const TaskScreen = () => {
  return (
    <SafeAreaView style={styles.parentwrapperStyle}>
      <ScrollView>

        <AppHeader />
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

        <View style={styles.bottomWrapperStyle}>
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

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <Chip mode='outlined'
              selectedColor="#6d503c"
              style={styles.filterStyle}>
              <MaterialIcons name="filter-list" size={24} color="#6d503c" />
            </Chip>
            <Chip mode='outlined'
              selectedColor="#6d503c"
              style={styles.filterStyle}>ALL</Chip>
            <Chip mode='outlined'
              selectedColor="#6d503c"
              style={styles.filterStyle}>Hours to go</Chip>
            <Chip mode='outlined'
              disabled='true'
              selectedColor="#6d503c"
              style={styles.filterStyle}>1 Day to go</Chip>
            <Chip mode='outlined'
              disabled='true'
              selectedColor="#6d503c"
              style={styles.filterStyle}>2 Days to go</Chip>
            <Chip mode='outlined'
              disabled='true'
              selectedColor="#6d503c"
              style={styles.filterStyle}
            >3 Days to go</Chip>
          </ScrollView>

          <View style={styles.taskCardWrapper}>
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </View>

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
        </View>
      </ScrollView>
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
    marginTop: 45,
  },
  iconStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomWrapperStyle: {
    marginHorizontal: 12,
  },
  targetStyleWrapper: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  targetStyle: {
    color: "#6d503c",
    flexDirection: 'row',
  },
  filterStyle: {
    backgroundColor: "#fffbf7",
    marginVertical: 24,
    marginRight: 8,
    borderRadius: 16,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#6d503c",
  },
  taskCardWrapper: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default TaskScreen;