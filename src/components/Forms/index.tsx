import React, { useState } from "react";
import { TaskProps } from "../../types/task";
import { Button } from "../Button";
import { ContainerForm } from "./style";
import { v4 as uuidv4 } from "uuid";

export const Form = ({setTask}: {setTask: React.Dispatch<React.SetStateAction<TaskProps[]>>}) => {
  const [ formTask, setFormTask ] = useState({
    title:"",
    time: "",
  }) 

  function addTask(event: React.FormEvent) {
    event.preventDefault()
    setTask(prevTask => [...prevTask, {...formTask, id: uuidv4(), selected: false, completed: false}])
    setFormTask({
      title: "",
      time: "",
    })
  }

  return(
    <ContainerForm  onSubmit={addTask}>

      <div>
        <label htmlFor="title">Adicione um novo estudo</label>
        <input
          onChange={(e) => {setFormTask({...formTask, [e.target.name]: e.target.value})}} 
          type='text' 
          name="title" 
          value={formTask.title}
          id="title" 
          placeholder="O que você quer estudar"
          required
        />
      </div>

      <div>
        <label htmlFor="time">Tempo</label>
        <input
          onChange={(e) => {setFormTask({...formTask, [e.target.name]: e.target.value}), e.preventDefault()}}
          type='time' 
          step={1}
          value={formTask.time}
          name="time" 
          id="time" 
          min="00:00:00" 
          max="1:30:00"
          required
        />
      </div>

      <Button title="Adicionar" type="submit" />
    </ContainerForm>
  );
}