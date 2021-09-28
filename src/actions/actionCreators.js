import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, EDIT_EXIST_SERVICE, CANCEL, FILTER_SERVICE } from './actionTypes';
//создание экшенов
export function addService(name, price, id) {//экшен добавления
  return {type: ADD_SERVICE, payload: {name, price, id}};
}

export function removeService(id) {//экшен удаления
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(name, value) {//экшен изменения значения в поле ввода
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}//price нельзя поставить т.к. значение даёт input, а там по умолчанию два поля name и value
}

export function editExistService(id, name, price) {//экшен изменения уже существующего сервиса
  return {type: EDIT_EXIST_SERVICE, payload: {id, name, price}};
}

export  function cancel() {//экшен отмены действия
  return {type: CANCEL}
}

export function filterService(value) {//экшен фильтрации
  return {type: FILTER_SERVICE, payload: {value}};
}