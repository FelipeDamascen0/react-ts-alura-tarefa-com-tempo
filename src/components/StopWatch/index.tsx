import { useEffect, useState } from "react";
import { timeToSecond } from "../../common/utils/time";
import { PropsStopWatch } from "../../types/task";
import { Button } from "../Button";
import { StopWatchContainer } from "./style";
import { Watch } from "./Watch";


export const StopWatch = ({ selected, finishTask }: PropsStopWatch) => {
  const [ time, setTime ] = useState<number>();

  useEffect(() => {
    if(selected?.time){//estou validando no if se existe o selected e se existe o selected.time
      setTime(timeToSecond(selected.time));//aqui já e certeza que o selected e selected.time não são nulos por isso não precisamos do ?
    }
  }, [selected]);

  function regressive(counter: number = 0) {
    setTimeout(() => {
      if(counter > 0) {
        setTime(counter - 1);
        regressive(counter - 1);
      }else{
        finishTask();
      }

    }, 1000);
  }

  return(
    <StopWatchContainer>

      <p>Escolha o card e inicie o cronômetro {time}</p>

      <div>
        <Watch time={time} />
      </div>

      <Button title="Começar!" onClick={() => {regressive(time)}} />

    </StopWatchContainer>
  );
}