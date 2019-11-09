import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addTodo } from '../../actions';
import './index.scss'

class TodoListForm extends Component {
  state = {
    name: ''
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    const { addTodo: addTodoAction } = this.props
    const { name } = this.state
    event.preventDefault()

    addTodoAction({
      name
    })
  }

  render () {
    const { name } = this.state

    return (
      <form className='todo_form--container' onSubmit={this.handleSubmit}>
        <h2>Agregar tarea</h2>
        <label>Tarea: </label>
        <input name='name' onChange={this.handleInputChange} value={name}/>
        <button className='todo_form--button' type='submit'>
          Agregar
        </button>
      </form>
    )  
  }

};

export default connect(undefined, { addTodo })(TodoListForm);
