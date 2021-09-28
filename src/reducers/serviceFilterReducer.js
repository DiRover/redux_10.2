import {FILTER_SERVICE} from '../actions/actionTypes';

const initialState = {//начальное значение фильтра
  name: '',
};

export default function serviceFilterReducer(state = initialState, action) {
  if (action.type === FILTER_SERVICE) {
    const {value} = action.payload;//получаем данные для фильтрации
    return {...state, name: value}//возвращаем новый стейт
  } else {//дефолтное значения
    return state;
  }
}
