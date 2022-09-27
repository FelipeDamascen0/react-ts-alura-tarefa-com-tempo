import { PropsSelectTask } from "../../types/task";
import { Item } from "./Item";
import { ContainerList } from "./style";


export const List = ({ task, selectTask }: PropsSelectTask) => {
  return(
    <ContainerList>
      <h2>Estudos do dia</h2>
      <ul>

        {
          task.map((item) => {
            return(
              <Item {...item} key={item.id} selectTask={selectTask} />
            );
          })
        }

      </ul>
    </ContainerList>
  );
}