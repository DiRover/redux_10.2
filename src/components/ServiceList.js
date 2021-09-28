import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeService, editExistService} from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();
  const [state, setState] = useState(true);//нужно для того, чтобы отображать или не отображать кнопку удаления
  useEffect(() => {//если меняется список (значение или кол-во)
    setState(() => {//при редактировании или удалении
      return  true;//устанавливаем снова кнопку удаления
    });
  },[items])

  const handleRemove = id => {//удаляем сервис
    dispatch(removeService(id));
  }

  const handleEdit = (id, name, price) => {
    setState(() => {//убираем кнопку удаления при ридактировании
      return  false;
    });
    dispatch(editExistService(id, name, price))
  }

  return (
    <ul>
      {items.map(service => (
        <li key={service.id}>
          {service.name} {service.price}
          <button onClick={() => handleEdit(service.id, service.name, service.price)}>Edit</button>
          {state ? <button onClick={() => handleRemove(service.id)}>✕</button> : <></>}
        </li>
      ))}
    </ul>
  )
}
//если state === true, то рисуем кнопку удалить
export default ServiceList
