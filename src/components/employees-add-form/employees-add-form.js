import { Component } from 'react';

import './employees-add-form.scss';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            post: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        //if (this.state.name.length < 3 || !this.state.post || !this.state.salary) return; заменил условие на required в input
        this.props.onAdd(this.state.name, this.state.post, this.state.salary);
        this.setState({
            name: '',
            post: '',
            salary: ''
        })
    }

    render() {
        const {name, post, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавить нового сотрудника</h3>
                <form 
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        required // предупреждение браузера о том, что необходимо заполнить поле
                        minLength="3"
                        className="form-control new-post-label" 
                        placeholder="Имя сотрудника"
                        name="name"
                        value={name} 
                        onChange={this.onValueChange}/>
                    <input type="text"
                        required // предупреждение браузера о том, что необходимо заполнить поле
                        minLength="8" 
                        className="form-control new-post-label" 
                        placeholder="Должность"
                        name="post"
                        value={post} 
                        onChange={this.onValueChange}/>
                    <input type="number"
                        required // предупреждение браузера о том, что необходимо заполнить поле 
                        className="form-control new-post-label" 
                        placeholder="З/П в руб.?"
                        name="salary"
                        value={salary} 
                        onChange={this.onValueChange}/>
    
                    <button type="submit" 
                            className="btn btn-outline-light">Добавить</button>             
                </form>   
            </div>
        );
    }
}

export default EmployeesAddForm;