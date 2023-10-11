import React from "react";
import TodoListState from "./TodoListState";
import { selector } from "recoil";

const todoListStatsState = selector({
    key: 'todoListStatsState',
    get: ({get}) => {
        const todoList = get(TodoListState);
        const totalNum = todoList.length;
        const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
        const totalUnCompletedNum = totalNum - totalCompletedNum;
        const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

        return{
            totalNum,
            totalCompletedNum,
            totalUnCompletedNum,
            percentCompleted
        };
    }
});

export default todoListStatsState;