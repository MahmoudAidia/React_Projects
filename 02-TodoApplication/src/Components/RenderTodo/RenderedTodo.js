import "./RenderedTodo.css";
import Working from "../Working/Working";
const RenderedTodo = (props) => {
  const gettingNewStatus = () => {};
  return (
    <div>
      <Working todo={props.todo} gettingNewStatus={gettingNewStatus} />
    </div>
  );
};

export default RenderedTodo;
