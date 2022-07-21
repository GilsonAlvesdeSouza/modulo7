import React from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';

import * as S from './styled';
import ListSwipe from '../ListSwipe';
import ItemList from '../ItemList';

const List = ({list, onPress}) => {
  return (
    <SwipeListView
      data={list}
      renderItem={({item, index}) =>
        list.lenght !== 0 && (
          <ItemList item={item} onPress={() => onPress(index)} />
        )
      }
      renderHiddenItem={({index}) => <ListSwipe />}
      leftOpenValue={50}
      disableLeftSwipe={true}
      keyExtractor={item => item.id}
    />
  );
};

export default List;
