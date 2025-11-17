import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidV4 } from "uuid";

const MessageSlice = createSlice({
  name: "message",
  initialState: {
    value: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.value.push({
        // id: action.payload.id,
        id: uuidV4(),
        label: action.payload.label,
        type: action.payload.type,
      });
    },

    removeMessage: (state, action) => {
      state.value = state.value.filter(
        (message) => message.id != action.payload.id
      );
    },

    clearMessages: (state) => {
      state.value = [];
    },
  },
});

export const { addMessage, removeMessage, clearMessages } =
  MessageSlice.actions;
export default MessageSlice.reducer;
