import { createSlice } from "@reduxjs/toolkit";
const initialState=[]
export const todoSlice=createSlice(
    {
        name:'todo',
        initialState,
        reducers:{
            ADD:(state,action)=>{
            const newTodo={
                id:Math.trunc(Math.random()*100),
                text:action.payload,
                completed:false
            }
            state.push(newTodo)
            },
            REMOVE:(state,action)=>{
                const index = state.findIndex((todo) => todo.id === action.payload);
                if (index !== -1) {
                  state.splice(index, 1);
                }
            },
            DONE: (state, action) => {
                const todo = state.find((todo) => todo.id === action.payload);
                if (todo) {
                  todo.completed = !todo.completed;
                }
              },
        }
    }
)

export const{ADD,REMOVE,DONE}=todoSlice.actions;
export default todoSlice.reducer;