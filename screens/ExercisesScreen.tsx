import { Button, StyleSheet, View, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { RootTabScreenProps } from '../types';
import React from 'react';
import { MonoText } from '../components/UI/StyledText';
import { FontAwesome } from '@expo/vector-icons';
import whitesquaredpaper from '../assets/images/white-squared-paper.webp';

export default function ExercisesScreen({ navigation }: RootTabScreenProps<"Exercises">) {

  function startExercise(digit?: number) {
    navigation.navigate("Info");
  }

  return (
    <ImageBackground source={whitesquaredpaper} imageStyle={{opacity: 0.3}}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Умножение на:</Text>
          <View style={styles.evenItems}>
            <TouchableOpacity activeOpacity={0.6} >
              <View style={styles.button}>
                <FontAwesome name="star" size={24} color="black" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.oddItems}>
            <TouchableOpacity activeOpacity={0.6} >
              <View style={styles.button}>
                <MonoText style={styles.buttonText}>2</MonoText>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} >
              <View style={styles.button}>
                <MonoText style={styles.buttonText}>3</MonoText>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.evenItems}>
            <TouchableOpacity activeOpacity={0.6} >
              <View style={styles.button}>
                <MonoText style={styles.buttonText}>4</MonoText>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.oddItems}>
            <TouchableOpacity activeOpacity={0.6} >
              <View style={styles.button}>
                <MonoText style={styles.buttonText}>5</MonoText>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} >
              <View style={styles.button}>
                <MonoText style={styles.buttonText}>6</MonoText>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.evenItems}>
            <TouchableOpacity activeOpacity={0.6} >
              <View style={styles.button}>
                <MonoText style={styles.buttonText}>7</MonoText>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.oddItems}>
            <TouchableOpacity activeOpacity={0.6} >
              <View style={styles.button}>
                <MonoText style={styles.buttonText}>8</MonoText>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} >
              <View style={styles.button}>
                <MonoText style={styles.buttonText}>9</MonoText>
              </View>
            </TouchableOpacity>
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
  oddItems: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  evenItems: {
    flexDirection: 'row',
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
