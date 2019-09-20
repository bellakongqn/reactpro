let nextTodoId = 0
export const addTodo = text => {
    return {
      type: 'ADD_TODO',
      id: nextTodoId++,
      text
    }
  }

  export const setCompleted = id => {
    return {
      type: 'Set_Completed',
      id,
    }
  }

  export const filter = filter => {
    return {
      type: 'SET_VISIBILITY_FILTER',
      filter
    }
  }
  
  