import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import im from '../../assets/images/im.jpg';

export default function InfoScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={im}
      />
      <Text style={styles.title}>2x2: Таблица умножения, v 1.0</Text>
      <Text>Автор: Сергей Давков</Text>
      <Text>Tg: @sdavkov</Text>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 30
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'stretch'
  }
});
