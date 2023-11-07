import { useState } from "react";
import "./Working.css";
const Working = (props) => {
  const [backgroundColor, setBackgroundColor] = useState(false);
  const [btnClicked, setBtnClicked] = useState(false);

  let duration = props.todo.duration;
  let element = <span>{duration} Min</span>;
  if (duration >= 60) {
    duration = duration / 60;
    element = <span>{duration.toFixed(1)} H</span>;
  }

  const changeTodoBackgroundHandler = () => {
    setBackgroundColor((prevState) => {
      return !backgroundColor;
    });
    setBtnClicked((prevState) => {
      return !prevState;
    });
  };

  return (
    <div>
      <div
        className="rendered-todo"
        style={backgroundColor ? { backgroundColor: "#416b93" } : {}}
      >
        <div className="time">
          <span className="todo-id">{element} </span>
        </div>
        <h2 className="todo-title">{props.todo.title}</h2>
        <div className="completion-logo">
          <button className="check-btn" onClick={changeTodoBackgroundHandler}>
            {btnClicked ? "Done ✔" : "In Progress"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Working;
