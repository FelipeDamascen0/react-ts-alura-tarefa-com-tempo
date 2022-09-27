import { Form } from "../../components/Forms";
import { useState } from "react";
import { List } from "../../components/List";
import { StopWatch } from "../../components/StopWatch";
import { ContainerHome } from "./style";
import { TaskProps } from '../../types/task';

export const Home = () => {

  const [ task, setTask ] = useState<TaskProps[] | []>([])
  const [ selected, setSelected ] = useState<TaskProps>()

  function selectTask(taskSelected: TaskProps) {
    setSelected(taskSelected)
    setTask(prevTask => prevTask.map(task => ({
      ...task,
      selected: task.id === taskSelected.id ? true : false,
    })))
  }

  function finishTask() {
    setSelected(undefined);
    if(selected) {
      setTask(prevTask => prevTask.map(task => {
        if(task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task;
      }))
    }
  }

  return(
    <ContainerHome>
      <Form setTask={setTask} />
      <List task={task} selectTask={selectTask} />
      <StopWatch selected={selected} finishTask={finishTask} />
    </ContainerHome>
  );
}