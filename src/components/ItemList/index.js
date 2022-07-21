import React from 'react';
import * as S from './styled';

const ItemList = ({item, onPress}) => {
  return (
    <S.Item onPress={onPress} activeOpacity={1} underlayColor='#ccc'>
      <>
        <S.Text>{item.task}</S.Text>
        <S.ItemCheck done={item.done} />
      </>
    </S.Item>
  );
};

export default ItemList;
