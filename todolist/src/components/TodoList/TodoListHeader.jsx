import React, { useMemo } from "react";
import { TodoListHeaderWrap } from "./style";

const todayDate = new Date();
const week = ["일", "월", "화", "수", "목", "금", "토"];

function TodoListHeader({ todos }) {
  const todayArray = useMemo(() => {
    return todayDate.toLocaleDateString("ko-KR").split(".");
  }, []);

  const todayWeek = week[todayDate.getDay()];

  const completeCount = todos.filter((todo) => todo.isComplete).length;

  return (
    <TodoListHeaderWrap>
      <h1>{`${todayArray[0]}년 ${todayArray[1]}월 ${todayArray[2]}일 (${todayWeek}요일)`}</h1>
      <ul>
        <li>
          합계: <b>{todos.length}</b>
        </li>
        <li>
          완료: <b>{completeCount}</b>
        </li>
        <li>
          미완료: <b>{todos.length - completeCount}</b>
        </li>
      </ul>
    </TodoListHeaderWrap>
  );
}

export default React.memo(TodoListHeader);
