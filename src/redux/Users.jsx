import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name:'Users',
    initialState:{
        messages:[],
        date:new Date().toString()
    },
    reducers:{
        sendMessage:(state) => {
            state.messages.push({ sender:'Adam',receiver:'John',message:'Hello',date:new Date().toString() });
        },
        getMessages:(state) => {
            console.log(state.messages);
        },
        updateMessage:(state) => {
            let filtered = state.messages.filter(message => message.sender == 'Adam');
                    state.messages = filtered;
                   state.messages.push({ sender:'Adam', receiver:'John',message:'Good morning',date:new Date().toString()});
        },
        deleteMessage:(state) => {
            state.messages = state.messages.filter(message => message.sender == 'Adam');
        }
    }
});

export const { sendMessage, getMessages, updateMessage, deleteMessage } = usersSlice.actions;

export default usersSlice.reducer;