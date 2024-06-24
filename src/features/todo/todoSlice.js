import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{
        id:1,
        text:'hello world',
    }],
    isEditable:false,
    todoEdit:null,
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo:(state,action)=>{
           state.todos=state.todos.map((todo)=>todo.id===action.payload.id ? action.payload.todo:todo);
           state.isEditable=false;
           state.todoEdit=null;
        },
        startEditing:(state,action)=>{
          state.isEditable=true;
          state.todoEdit=action.payload;
        },
    }
})

export const {addTodo,removeTodo,updateTodo,startEditing}=todoSlice.actions

export default todoSlice.reducer