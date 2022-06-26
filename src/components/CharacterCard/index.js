import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const CharacterCard = ({item, onPress}) => {
  // console.log('q123 item', item);

  return (
    <TouchableOpacity
      testID="CharacterCard"
      style={styles.card}
      // activeOpacity={ACTIVE_OPCITY}
      onPress={() => onPress(item)}>
      <View style={{flexDirection: 'row'}}>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text>{item.name}</Text>
      </View>

      {/* <Text style={styles.name} numberOfLines={2}>
        {item.name}
      </Text>
      <View>
        <Text>{item.episode}</Text>
        <Text>{item?.air_date}</Text>
      </View> */}
    </TouchableOpacity>
  );
};

export {CharacterCard};
