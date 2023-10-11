import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../states/todoListFilterState";

function TodoListFilter(){
    const [filter, setfilter] = useRecoilState(todoListFilterState)

    const updateFilter = ({target: {value}}) => {
        setfilter(value);
    };

    return(
        <div>
            Filter:
            <select value={filter} onChange={updateFilter}>
                <option value="Show ALL">All</option>
                <option value="Show Completed">Completed</option>
                <option value="Show Uncompleted">UnCompleted</option>
            </select>
        </div>
    )
}

export default TodoListFilter