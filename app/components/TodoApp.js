import React from 'react';
import TodoList from './TodoList';

export class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {id:1, text:'Task1'},
                {id:2, text:'Task2'},
                {id:3, text:'Task3'}
            ],
            text: ''
        };

        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    addTask(e) {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            items: this.state.items.concat(
                {
                    id: Date.now(),
                    text: this.state.text
                }
            )
        });
    }

    handleChange(e) {
        e.preventDefault;
        this.setState({
            text: e.target.value
        });
    }

    render() {
        console.log('render');
        return (
            <div>
                <form onSubmit={this.addTask}>
                    <input type="text" onChange={this.handleChange}/>
                    <button>Add</button>
                </form>
                <h1>Tasks:</h1>
                <TodoList items={this.state.items} />
            </div>
        );
    }
}

export default TodoApp;