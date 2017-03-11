import React, {PropTypes} from 'react';

export class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map((item) => {
                    return (
                        <li key={item.id}>{item.text}</li>
                    )
                })}
            </ul>
        )
    }
}

// TodoList.propTypes = {
//     items: PropTypes.string.isRequired
// };

export default TodoList;