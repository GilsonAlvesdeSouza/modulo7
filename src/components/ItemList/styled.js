import styled from 'styled-components/native';

export const Item = styled.TouchableHighlight`
  padding: 0 10px;
  height: 50px;
  background-color: #eee;
  align-items: center;
  margin: 2px 5px;
  border-radius: 8px;
  flex-direction: row;
  transition: all ease 0.2s;
`;

export const Text = styled.Text`
  font-size: 15px;
  font-weight: bold;
  flex: 1;
`;

export const ItemCheck = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({done}) => (done ? '#aaa' : '#fff')};
  border: 3px solid #ccc;
`;
