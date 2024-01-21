import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name:'Users',
    initialState:{
        messages:[],
        date:new Date().toString()
    },
    reducers:{
        sendMessage:(state,action:PayloadAction<object>) => {
            console.log('action',action);
            console.log('state',state);
            switch(action.type){
                case 'Users/sendMessage':
                    state.messages.push(action.payload);
                    break;
                    default: console.log(state.messages);
            }
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