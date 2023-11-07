import React, { useState } from "react";
import "./EnterTodo.css";
import ErrorModal from "../ErrorModal/ErrorModal";
const EnterTodo = (props) => {
  // Component states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [titleIsValid, setTitleIsValid] = useState(true);
  const [durationIsValid, setDurationIsValid] = useState(true);

  const [error, setError] = useState();

  // Title change Handler
  const titleChangeHandler = (event) => {
    // Checking for the input to update the title input border color to red if there is a submit and there is no input
    if (event.target.value.trim().length > 0) {
      // This means that there is an input which is not an empty space
      setTitleIsValid(true);
    }
    setEnteredTitle(event.target.value);
  };

  // Duration Change Handler
  const durationChangeHandler = (event) => {
    // Checking for the duration input to update the duration input border color to red if there is a submit and there is no input
    if (event.target.value.trim().length > 0) {
      // This means that there is an input which is not an empty space
      setDurationIsValid(true);
    }
    setDuration(event.target.value);
  };

  // Form submition
  const submitHandler = (event) => {
    // Preventing the form default submission
    event.preventDefault();

    // Checking the user inputs
    if (enteredTitle.trim().length === 0 && duration.trim().length === 0) {
      setTitleIsValid(false);
      setDurationIsValid(false);
      setError(true);
      return;
    }
    if (enteredTitle.trim().length === 0) {
      setTitleIsValid(false);
      console.log(titleIsValid);
      setError(true);
      return;
    }
    if (duration.trim().length === 0) {
      setDurationIsValid(false);
      setError(true);
      return;
    }

    // Gathering the inputs in case there is
    const newTodo = {
      title: enteredTitle,
      duration: +duration,
      status: 1,
      id: Math.random(),
    };
    props.gettingNewTodo(newTodo);
    setEnteredTitle("");
    setDuration("");
  };

  const modalOnClick = () => {
    setError(false);
  };

  // Component JSX return
  return (
    <div>
      {error && (
        <ErrorModal
          message="Please Enter Task and Duration"
          onConfirm={modalOnClick}
        />
      )}

      <form onSubmit={submitHandler} className="enter-todo-container">
        <div className={`input-container`}>
          <input
            placeholder="Add a new Todo..."
            className={`enter-todo-input ${!titleIsValid ? "invalid" : ""}`}
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          ></input>
          <input
            placeholder="Duration in minutes"
            type="number"
            min="1"
            className={`enter-todo-input ${!durationIsValid ? "invalid" : ""}`}
            onChange={durationChangeHandler}
            value={duration}
          ></input>
        </div>
        <button
          type="submit"
          className="enter-todo-button"
          onClick={props.postTodos}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};
export default EnterTodo;
