import React from "react"
import { atom, selector } from "recoil";
import TodoListState from "./TodoListState";

const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'Show ALL'
})

const filterTodoListState = selector({
    key: 'filterTodoListState',
    get: ({get}) => {
        const filter = get(todoListFilterState)
        const list = get(TodoListState)

        switch (filter){
            case 'Show Completed':
                return list.filter((item) => item.isComplete);
            case 'Show Uncompleted':
                return list.filter((item) => !item.isComplete);
            default:
                return list;
        }
    }
})

export {todoListFilterState};
export {filterTodoListState};