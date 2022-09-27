export interface TaskProps {
  title: string,
  time: string,
  selected: boolean,
  completed: boolean,
  id: string
}


export interface PropsSelectTask {
  task: TaskProps[],
  selectTask: (selectTask: TaskProps) => void //tipo de retorno que não retorna nada
}

export interface PropsItem extends TaskProps {//extends: Vai ter todos os tipos de TaskProps {title, time, id, selected, completed}
  selectTask: (selectTask: TaskProps) => void
}

export interface PropsStopWatch {
  selected: TaskProps | undefined,
  finishTask: () => void,
}

export interface PropsTime {
  time: number | undefined,
}