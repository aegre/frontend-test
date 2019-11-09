import todoItems from "../data/todoItems"
import filters from "../consts/filters"
import { ADD_TODO_ACTION, TOGGLE_ITEM_STATUS_ACTION, SET_FILTER_ACTION } from "../actions"

const initialState = {
  todoList: todoItems,
  selectedFilter: filters.all
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ACTION: {
      return {
        ...state
      }
    }
    case TOGGLE_ITEM_STATUS_ACTION: {
      const indexToToggle = state.todoList.findIndex(item => item.id === action.payload)
      const newTodoList = [...state.todoList]
      newTodoList[indexToToggle].completed = !newTodoList[indexToToggle].completed
      return { 
        ...state,
        todoList: newTodoList
      }
    }
    case SET_FILTER_ACTION: {
      return {
        ...state,
        selectedFilter: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export default todoReducer
