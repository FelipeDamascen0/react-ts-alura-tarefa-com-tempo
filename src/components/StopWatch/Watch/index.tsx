import { PropsTime } from "../../../types/task";
import { WatchDivision, WatchSpanTimer } from "./style";

export const Watch = ({ time = 0 }: PropsTime) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [ tenMinute, unitMinute ] = String(minutes).padStart(2, "0");
  const [ tenSecond, unitSecond ] = String(seconds).padStart(2, "0");

  return(
    <>
      <WatchSpanTimer>{tenMinute}</WatchSpanTimer>
      <WatchSpanTimer>{unitMinute}</WatchSpanTimer>
      <WatchDivision>:</WatchDivision>
      <WatchSpanTimer>{tenSecond}</WatchSpanTimer>
      <WatchSpanTimer>{unitSecond}</WatchSpanTimer>
    </>
  );
}