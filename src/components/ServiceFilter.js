import React from "react";
import {filterService} from "../actions/actionCreators";
import {useDispatch, useSelector} from "react-redux";

function ServiceFilter() {//компонент фильтрации сервисов
    const service = useSelector(state => state.serviceFilter);
    const dispatch = useDispatch();

    const handleFilter = evt => {//получаем значение из поля инпута для фильтрации
        const {value} = evt.target;//само значение
        dispatch(filterService(value));//диспатчим экшн
    }

    const handleSubmit = evt => {//просто останавливаем отправление формы клавишей Enter
        evt.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name='name' onChange={handleFilter} value={service.name} />
        </form>
    );
}

export default ServiceFilter;