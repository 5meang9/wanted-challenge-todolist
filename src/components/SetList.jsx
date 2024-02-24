import React from "react";
import "../styles/SetList.css";

function AddList(props){

  const {toDoList, setTodoList} = props; // setTodoList 추가

  const handleDelete = (index) => {
    // 해당 인덱스의 항목을 제외한 새로운 배열 생성
    const updatedTodoList = toDoList.filter(item => item.indexCount !== index);
    // 새로운 배열을 설정하여 기존 toDoList 업데이트
    setTodoList(updatedTodoList);
  };

  const listInput = toDoList.map((row) => (
    <div key={row.indexCount} className="listInput">
      {row.text}
      <button onClick={() => handleDelete(row.indexCount)}>Delete</button>
    </div>
  ));

  return(
    <div>
      {listInput}
    </div>
  );
}

export default AddList;
