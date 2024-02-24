import React, { useState } from "react";
import AddList from "./SetList";
import "../styles/List.css";

function List(props){

  const [indexCount, setIndexCount] = useState(0);
  const [text, setText] = useState("");
  const [toDoList, setTodoList] = useState([]);

  const AddInputList = () =>{
    setTodoList([
      ...toDoList,
      {
        indexCount: indexCount, 
        text: text
      }
    ])
    setIndexCount(indexCount + 1);
  }

  const changeInputText = (e) =>{
    setText(e.target.value);
  }
  

  return(
    <div className="ListContainer">
      <div className="ListWrap">
        <input type='text' placeholder="input" value={text} onChange={changeInputText}/>
        <button onClick={AddInputList}>Add</button>
      </div>
      <AddList toDoList={toDoList} setTodoList={setTodoList} />
    </div>
    
  );

}

export default List;