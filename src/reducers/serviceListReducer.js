import { nanoid } from 'nanoid';
import {ADD_SERVICE, REMOVE_SERVICE, CANCEL, FILTER_SERVICE} from '../actions/actionTypes';
//редьюсер для списка
const initialState = [//начальное состояние
  {id: nanoid(), name: 'Замена стекла', price: 21000},
  {id: nanoid(), name: 'Замена дисплея', price: 25000},
];

let currentState = [...initialState];//дополнительное хранение текущего стейта для фильтрации

export default function serviceListReducer(state = initialState, action) {
  if (action.type === ADD_SERVICE) {//реакция на добавление сервиса
    const {name, price, id} = action.payload;
    if (id) {//если id существует, значить добавление не нового, а уже сущестующего сервиса после редактирования
      const newState = state.map((service) => {//возвращаем новый стейт
        if (service.id === id) {//находим этот сервис в массиве
          service.name = name;//меняем ему имя
          service.price = Number(price);//меняем ему цену, при этом надо перевести в число, так как приходит строка
        }
        return service;
      })
      currentState = [...newState];//перезаписываем текущий стейт для фильтрации
      return  newState;//и возвращаем новый стейт с изменённым полем
    } else {
      const newState = [...state, {id: nanoid(), name, price: Number(price)}];
      currentState = [...newState];//перезаписываем текущий стейт для фильтрации
      return newState;//и возвращаем новый стейт
    }
  } else if (action.type === REMOVE_SERVICE) {//рекция на удаление сервиса из списка
    const {id} = action.payload;//получаем айди удаляемого сервиса
    currentState = state.filter(service => service.id !== id)//удалем сервис из текущего стейта
    return state.filter(service => service.id !== id);//возвращаем новый стейт без удалённого сервиса (можно было бы и currentState)
  } else if (action.type === CANCEL) {//реакция на отмену редактирования сервиса
    currentState = [...state];//перезаписываем текущий стейт для фильтрации
    return [...state];//и возвращаем новый стейт
  } else if (action.type === FILTER_SERVICE) {//рекция на фильтрацию
    const {value} = action.payload;//получаем значение для фильтрации
    if (value === '') return [...currentState];//если поле фильтрации пустое, то возвращаем текущий стейт
    const newState = currentState.filter((service) => {
    const str = service.name;//получаем имя сервиса из текущего стейта
    if (str.toLowerCase().startsWith(value.toLowerCase())) {//название сервиса и значение из поля фильтра приводим к одному регистрау и проверяем на startsWith
      return service;//если находит такой сервис
    } else {
      return false//можно это не писать, но будет ворнинг
    }
    });
    return newState;//возвращаем отфильтрованный список
  } else {
    return state;//дефлтное значение
  }
}
