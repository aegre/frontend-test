import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.scss'
import filters from '../../consts/filters';
import { setFilter } from '../../actions';

const normalItemClass = 'todo_filter--item'
const selectedItemClass = 'todo_filter--item todo_filter--item-selected' 

class TodoFilter extends Component {
  render() {
    const { selectedFilter, setFilter: setFilterAction } = this.props
    return (
      <div className='todo_filter--container'>
        <div 
          className={selectedFilter === filters.all ? selectedItemClass : normalItemClass}
          onClick={ () => setFilterAction(filters.all)}
        >
          Todas
        </div>
        <div 
          className={selectedFilter === filters.incompleted ? selectedItemClass : normalItemClass}
          onClick={ () => setFilterAction(filters.incompleted)}
        >
         Sin terminar
        </div>
        <div 
          className={selectedFilter === filters.completed ? selectedItemClass : normalItemClass}
          onClick={ () => setFilterAction(filters.completed)}
        >
          Terminadas
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  selectedFilter: state.todos.selectedFilter
})

export default connect(mapStateToProps, { setFilter })(TodoFilter);
