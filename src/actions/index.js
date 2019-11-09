export const ADD_TODO_ACTION = 'ADD_TODO'

export const SET_FILTER_ACTION = 'SET_FILTER'

export const TOGGLE_ITEM_STATUS_ACTION = 'TOGGLE_ITEM_STATUS_ACTION'

export const addTodo = newTodo => ({
  type: ADD_TODO_ACTION,
  payload: newTodo
})

export const toggleItemStatus = id => ({
  type: TOGGLE_ITEM_STATUS_ACTION,
  payload: id
})

export const setFilter = filter => ({
  type: SET_FILTER_ACTION,
  payload: filter
})
