import React, {useState} from 'react';
import {createGlobalStyle} from 'styled-components';
import * as S from './styled';

const AddItemList = ({addItemList}) => {
  const [item, setItem] = useState('');

  const handleSubmit = () => {
    if (item.trim() !== '') {
      addItemList(item);
      setItem('');
    }
  };

  return (
    <S.AddItemArea>
      <S.AddItemInput
        placeholder={'Descrição'}
        value={item}
        onChangeText={e => setItem(e)}
        onSubmitEditing={handleSubmit}
        returnKeyType="go"
      />
    </S.AddItemArea>
  );
};

export default AddItemList;
