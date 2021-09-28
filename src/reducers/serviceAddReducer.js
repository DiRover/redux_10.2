import { CHANGE_SERVICE_FIELD, ADD_SERVICE, EDIT_EXIST_SERVICE, CANCEL } from '../actions/actionTypes'

const initialState = {//начальное состояние
  name: '',//также нужно для очистки полей ввода
  price: '',
};
//редьюсер для компонентов добавления и редактирования
export default function serviceAddReducer(state = initialState, action) {
  if (action.type === CHANGE_SERVICE_FIELD) {//реакция на редактирование поля
    const {name, value} = action.payload;//получаем название поля и его значение
    return {...state, [name]: value};//возвращаем новое состояние
  } else if (action.type === ADD_SERVICE) {//реакция на добавление нового сервиса
    return {...initialState};//очищение поля ввода, нужно вернуть новый объект, т.к. редюсер чистая функция
  }else if (action.type === EDIT_EXIST_SERVICE) {//реакция на редактирование существующего сервиса
    let {id, name, price} = action.payload;
    if (isNaN(price)) price = 0;//если ввели стоимость буквами
    return {...state, name: name, price: price, id: id};
  } else if (action.type === CANCEL) {//реакция на отмену редактирования существующего сервиса
    return {...initialState}
  } else {//дефолтный случай, у браузера бывают дефолтные значения
    return state;
  }
}
