import { PropsItem } from "../../../types/task";
import { TaskCompleted } from "./style";

export const Item = ({title, time, id, completed, selected, selectTask }: PropsItem) => {

  return(
    <li 
      onClick={() => !completed && selectTask({title, time, id, completed, selected})}
      style={selected ? {backgroundColor: "#000"} : {}}
    >
      <h3>{title}</h3>
      <span>{time}</span>
      {completed && <TaskCompleted aria-label="task completed"></TaskCompleted>}
    </li>
  );
}