import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.scss';

const EmployeesList = ({data, onDelete, onToggleProp, onChangeSalary, onChangePost}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;// id вынесли отдельно, а в itemProps оставили остальные св-ва
        return (
            <EmployeesListItem key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            onChangeSalary={(e) => onChangeSalary(id, parseInt(e.target.value))}
            onChangePost={(e) => onChangePost(id, e.target.value)}/>
        );
    });

    const style = {
        margin: '10px auto',
        fontSize: '22px', 
    }

    return (
        <ul className="app-list list-group">
            {elements.length ? elements :  <div style={style}>Сотрудник не найден</div>}
        </ul>
    );
}

export default EmployeesList;