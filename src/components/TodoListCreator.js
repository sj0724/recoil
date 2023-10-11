import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import TodoListState from "../states/TodoListState";

function TodoListCreator(){
    const [inputValue, setInputValue] = useState('');
    const settodoList = useSetRecoilState(TodoListState);

    const addItem = () => {
        settodoList((oldList) => [
         ...oldList,{
          id: getId(),
          text: inputValue,
          isComplete: false
            }
        ]);
    setInputValue('');
    };

    const onChange = ({target: {value}}) => {
        setInputValue(value);
    };

    return(
        <div>
            <input type="text" value={inputValue} onChange={onChange}/>
            <button onClick={addItem}>add</button>
        </div>
    )
}

let id = 0;
function getId(){
    return id++;
}

export default TodoListCreator;