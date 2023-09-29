import React from "react";
import { useRecoilValue } from "recoil";
import TodoListState from "../states/TodoListState";
import TodoListCreator from "../components/TodoListCreator";
import TodoItem from "../components/TodoItem";

function TodoList() {
    const todoList = useRecoilValue(TodoListState);

    return(
        <>
            <TodoListCreator/>
            {todoList.map((todoItem)=>(
                <TodoItem key={todoItem.id} item={todoItem}/>
            ))}
        </>
    )
}

export default TodoList;