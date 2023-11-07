import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";
import Login from "./Components/Login/Login";

function App() {
  const userTodos = [
    // { title: "React Course", duration: 120, status: 1, id: "e1" },
    // { title: "Reading a book", duration: 60, status: 1, id: "e2" },
    // { title: "Gym", duration: 90, status: 1, id: "e3" },
  ];

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [todos, setUpdateTodos] = useState(userTodos);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const gettingNewTodo = (todo) => {
    setUpdateTodos((prevState) => {
      return [todo, ...prevState];
    });
  };

  const getLogin = (status) => {
    setIsLoggedIn(true);
  };
  // const postTodos = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://react-http-38d55-default-rtdb.firebaseio.com/todo.json",
  //       {
  //         method: "POST",
  //         body: JSON.stringify(todos),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     if (!response.ok) {
  //       return new Error("Somethin is Wrong");
  //     }
  //   } catch (error) {
  //     setError(`${error.message}`);
  //   }
  // };

  // const fetchTodos = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch(
  //       "https://react-http-38d55-default-rtdb.firebaseio.com/todo.json"
  //     );

  //     if (!response.ok) {
  //       return new Error("Something went wrong in the send request");
  //     }
  //     const data = await response.json();
  //     console.log(data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setIsLoading(false);
  //     setError(`${error.message}`);
  //   }
  // };

  return (
    <div>
      {isLoggedIn ? (
        <div className="App">
          <Header />
          <Card
            todos={todos}
            isLoading={isLoading}
            // postTodos={postTodos}
            newTodo={gettingNewTodo}
          ></Card>
        </div>
      ) : (
        <Login getLogin={getLogin} />
      )}
    </div>
  );
}

export default App;
