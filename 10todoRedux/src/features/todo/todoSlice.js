import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
  todos: [{
    id:1,
    text:"Hello world",
  }]
}



export const todoSlice=createSlice({
  name: 'todos',
  initialState,
  reducers: {

    addTodo:(state,action)=>{
     const todo={
                id:nanoid(),
                text:action.payload,
            }
                state.todos.push(todo)  },

    removeTodo:(state,action)=>{
        console.log("Payload:", action.payload);
        state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
         console.log("Remaining:", state.todos);
    },
}
  })
  console.log(todoSlice.actions);
 
  export const{addTodo,removeTodo}=todoSlice.actions

  export default todoSlice.reducer