import React from "react";
import todoListStatsState from "../states/TodoListStatsState";
import { useRecoilValue } from "recoil";

function TodoListStats() {
    const {
        totalNum,
        totalCompletedNum,
        totalUnCompletedNum,
        percentCompleted
    } = useRecoilValue(todoListStatsState)

    const formattedPercentCompleted = Math.round(percentCompleted * 100);

    return(
        <ul>
            <li>Total Item: {totalNum} </li>
            <li>Items Completed: {totalCompletedNum}</li>
            <li>Items Not Completed: {totalUnCompletedNum}</li>
            <li>Percent Completed: {formattedPercentCompleted}%</li>
        </ul>
    )
}

export default TodoListStats;