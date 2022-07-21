import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';
import * as S from './App.styled';
import {taskList} from './src/list';
import * as C from './src/components';

const App = () => {
  const [list, setList] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [titleTask, setTitleTask] = useState('');
  const [msgTask, setMsgTask] = useState('');

  const saveListStorage = async () => {
    await AsyncStorage.setItem('@list', JSON.stringify(list));
  };

  const getList = async () => {
    const getList = JSON.parse(await AsyncStorage.getItem('@list'));
    if (getList.length !== -1 && getList !== null) {
      setList(getList);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    saveListStorage();
  }, [list]);

  const addItemList = description => {
    let newItem = {
      id: parseInt(list.length) + 1,
      task: description.trim(),
      done: false,
    };
    let newList = [...list];
    newList.push(newItem);
    setList(newList);
  };

  const toggleDone = index => {
    let newList = [...list];
    newList[index].done = !newList[index].done;
    setList(newList);
    setTitleTask(list[index].task);
    let done = list[index].done ? 'Feito' : 'A fazer';
    setMsgTask(done);
    setShowAlert(true);
  };

  return (
    <S.Page>
      <S.TextTitle>Task List</S.TextTitle>
      <C.AddItemList addItemList={addItemList} />
      <C.List list={list} onPress={toggleDone} />
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title={titleTask}
        message={msgTask}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="OK"
        confirmButtonColor="#0dcaf0"
        onConfirmPressed={() => {
          setShowAlert(false);
        }}
      />
    </S.Page>
  );
};

export default App;
