import React from "react";
import { useRecoilValue } from "recoil";
import TodoListCreator from "../components/TodoListCreator";
import TodoItem from "../components/TodoItem";
import TodoListFilter from "../components/TodoListFilter";
import { filterTodoListState } from "../states/todoListFilterState";
import TodoListStats from "../components/TodoListStats";

function TodoList() {
    const todoList = useRecoilValue(filterTodoListState);

    return(
        <>
            <TodoListFilter/>
            <TodoListStats/>
            <TodoListCreator/>
            {todoList.map((todoItem)=>(
                <TodoItem key={todoItem.id} item={todoItem}/>
            ))}
        </>
    )
}

export default TodoList;