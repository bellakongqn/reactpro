export default function TodoReducers(state=[], action){

    switch(action.type){
        case 'ADD_TODO':
            return[
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }

            ]
        case 'Set_Completed':
            return state.map(todo =>
                (todo.id === action.id) 
                    ? {...todo, completed: !todo.completed}
                    : todo
                )
        default:
            return state
    }
}