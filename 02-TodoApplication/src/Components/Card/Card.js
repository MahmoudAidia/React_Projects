import { useState } from "react";
import "./Card.css";
import EnterTodo from "../EnterTodo/EnterTodo";
import Filter from "../Filter/Filter";
import RenderedTodo from "../RenderTodo/RenderedTodo";
const Card = (props) => {
  let sortedTodos;
  let updateStatus;
  const [sortValue, setSortValue] = useState("1");
  const getDropDownValue = (value) => {
    setSortValue(value);
  };

  const gettingNewStatus = (newStatus) => {
    updateStatus = newStatus;
  };

  let message = <p className="message">There is no Todos</p>;

  if (props.todos.length > 0) {
    if (sortValue === "1") {
      // Sort Ascending
      sortedTodos = props.todos.sort((a, b) => {
        if (a.duration > b.duration) {
          return 1;
        } else if (a.duration < b.duration) {
          return -1;
        } else {
          return 0;
        }
      });
    } else if (sortValue === "2") {
      sortedTodos = props.todos.sort((a, b) => {
        if (a.duration > b.duration) {
          return -1;
        } else if (a.duration < b.duration) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    // console.log(sortedTodos);
    message = sortedTodos.map((todo) => {
      return (
        <RenderedTodo
          todo={todo}
          pushingUpNewStatus={gettingNewStatus}
          key={todo.id}
        />
      );
    });
  }
  return (
    <div className="card-container">
      <EnterTodo
        todos={props.todos}
        gettingNewTodo={props.newTodo}
        postTodos={props.postTodos}
      />
      <Filter getDropDownValue={getDropDownValue} />
      {props.isLoading && <p>Loading...</p>}
      <div className="rendered-todos-container">{message}</div>
    </div>
  );
};

export default Card;
