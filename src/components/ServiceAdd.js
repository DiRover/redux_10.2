import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, cancel} from '../actions/actionCreators';

function ServiceAdd() {//компонент добавления сервиса
	const service = useSelector(state => state.serviceAdd);//получаем редьюсер из стора
	const dispatch = useDispatch();//функиця отправки экшена

	const handleChange = evt => {//метод для обработки любого поля инпута
		const {name, value} = evt.target;//получаем имя поля и его содержимое
		dispatch(changeServiceField(name, value));//отправляем экшен changeServiceField с раннее полученными значениями
	}

	const handleSubmit = evt => {//метод добавления нового сервиса
			evt.preventDefault();
			dispatch(addService(service.name, service.price, service.id));//отправляем экшен
	}
	const handleCancel = () => {//метод отмены действия
		dispatch(cancel());//отправляем экшен
	};

	return (
		<form onSubmit={handleSubmit}>
			<input name='name' onChange={handleChange} value={service.name} />
			<input name='price' onChange={handleChange} value={service.price} />
			<>{service.id ? <><button type='submit'>Save</button><button onClick={handleCancel}>Cancel</button></> : <button type='submit'>Save</button>}</>
		</form>
	);
}
//если есть service.id, значить происходит редактирования уже сушествующего сервиса, поэтому появляется 2 кнопки Save и Cancel
//в другом случае происход добавление нового сервиса и появляется только кнопка Save
export default ServiceAdd;
