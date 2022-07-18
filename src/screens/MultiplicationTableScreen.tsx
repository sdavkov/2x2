import { ScrollView, StyleSheet, View } from 'react-native';

import MultiplicationTableItem from '../components/MultiplicationTableItem';
import MultiplicationTable from '../constants/MultiplicationTable';

export default function MultiplicationTableScreen() {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.items}>
        {MultiplicationTable.map(item => (
          <View style={styles.item} key={item}>
            <MultiplicationTableItem digit={item} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66cdaa',
    padding: 10
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  item: {
    alignItems: 'center',
    margin: 20,
  }
});
