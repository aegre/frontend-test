import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleItemStatus } from '../../actions';

class TodoList extends Component {
  render() {
    const { todoList, toggleItemStatus: toggleItemStatusAction } = this.props
    return (
      <ul className='todo_list--list'>
        {todoList.map((item) => (
          <li>
            <span className='todo_list--item' onClick={() => toggleItemStatusAction(item.id)}>
              {item.name}
              {item.completed && ' - completada'}
            </span>
            <button>Eliminar</button>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  todoList: state.todos.todoList
})


export default connect(mapStateToProps, { toggleItemStatus })(TodoList);
