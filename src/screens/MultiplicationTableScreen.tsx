import { ScrollView, StyleSheet, View } from 'react-native';

import TableItem from '../components/TableItem';
import MultiplicationTable from '../constants/MultiplicationTable';

export default function MultiplicationTableScreen() {

  return (
    <View>
      <ScrollView style={styles.container}>
        <View style={styles.items}>
          {MultiplicationTable.map(item => (
            <View style={styles.item} key={item}>
              <TableItem digit={item} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
