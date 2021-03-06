import { Button, StyleSheet, View, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { RootTabScreenProps } from '../../types';
import React from 'react';
import { MonoText } from '../components/UI/StyledText';
import { FontAwesome } from '@expo/vector-icons';
import whitesquaredpaper from '../../assets/images/white-squared-paper.webp';
import MainButton from '../components/UI/MainButton';
import {MULTIPLICATION_TABLE} from '../constants/Exercises';
import { Operator } from '../models/types';

export default function ExercisesScreen({ navigation }: RootTabScreenProps<"Exercises">) {

  function startExercise(operator: Operator, digit?: number) {
    navigation.navigate('Exercise', {operator, digit});
  }

  return (
    <ImageBackground source={whitesquaredpaper} imageStyle={{ opacity: 0.3 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Умножение</Text>
          <View style={styles.items}>
            {MULTIPLICATION_TABLE.map((item, index) => {
              if ((index + 1) % 3 === 0) {
                return (
                  <View key={item} style={styles.alongItem}>
                    <MainButton onPress={() => startExercise(Operator.multiplication, item)}>
                      <MonoText style={styles.buttonText}>{item}</MonoText>
                    </MainButton>
                  </View>)
              }
              else {
                return (
                  <View key={item} style={styles.pairItem}>
                    <MainButton onPress={() => startExercise(Operator.multiplication, item)}>
                      <MonoText style={styles.buttonText}>{item}</MonoText>
                    </MainButton>
                  </View>)
              }
            })}
            <View style={styles.alongItem}>
              <MainButton onPress={() => startExercise(Operator.multiplication)}>
                <FontAwesome name="star" size={24} color="black" />
              </MainButton>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 20,
    marginBottom: 30
  },
  items: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  pairItem: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  alongItem: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#66cdaa',
    borderRadius: 30,
    minWidth: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  buttonText: {
    fontSize: 25,
    fontWeight: '500'
  },
  separator: {
    marginVertical: 20,
    height: 2,
    width: '80%',
    backgroundColor: '#eee'
  },
});
