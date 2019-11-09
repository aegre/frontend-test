import React, { Component } from 'react';

import './index.scss'

class TodoListForm extends Component {
  state = {
    name: '',
    description: ''
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render () {
    const { name, description } = this.state

    return (
      <form className='todo_form--container' onSubmit={this.handleSubmit}>
        <h2>Agregar tarea</h2>
        <label>Tarea: </label>
        <input name='name' onChange={this.handleInputChange} value={name}/>
        <label>Descripción: </label>
        <input name='description' onChange={this.handleInputChange} value={description}/>
        <button className='todo_form--button' type='submit'>
          Agregar
        </button>
      </form>
    )  
  }

};

export default TodoListForm;
