import React from "react";
import { atom } from "recoil";

const TodoListState = atom({
    key: 'TodoListState',
    default: []
})

export default TodoListState;
