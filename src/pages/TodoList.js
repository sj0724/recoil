import React from "react";
import { useRecoilValue } from "recoil";
import TodoListCreator from "../components/TodoListCreator";
import TodoItem from "../components/TodoItem";
import TodoListFilter from "../components/TodoListFilter";
import { filterTodoListState } from "../states/todoListFilterState";

function TodoList() {
    const todoList = useRecoilValue(filterTodoListState);

    return(
        <>
            <TodoListFilter/>
            <TodoListCreator/>
            {todoList.map((todoItem)=>(
                <TodoItem key={todoItem.id} item={todoItem}/>
            ))}
        </>
    )
}

export default TodoList;