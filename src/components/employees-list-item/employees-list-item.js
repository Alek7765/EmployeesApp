import './employees-list-item.scss';

const EmployeesListItem = (props) => {

    const {name, post, salary, onDelete, onToggleProp, onChangeSalary, onChangePost, increase, rise} = props;

    let classNames ="list-group-item d-flex justify-content-between"
    if (increase) {
    classNames += ' increase';
    }
    if (rise) {
    classNames += ' like';
    }

    return (
        <li className={classNames}>
            <span className="list-group-item-label" 
                onClick={onToggleProp} 
                data-toggle="rise"
            >{name}</span>
            <input type="text" 
                className="list-group-item-input post-width" 
                onChange={onChangePost} 
                defaultValue={post}/>
            <input type="text" 
                className="list-group-item-input" 
                onChange={onChangeSalary} 
                defaultValue={salary.toLocaleString() + ' руб.'}/>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" 
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp}
                    data-toggle="increase">
                    <i className="fas fa-cookie"></i>    
                </button>

                <button type="button" 
                    className="btn-trash btn-sm "
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>    
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );

}

export default EmployeesListItem;