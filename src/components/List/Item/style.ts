import styled from 'styled-components';
import checkSvg from '../../../assets/check-mark.svg'

export const TaskCompleted = styled.span`
  display: block;
  background-image: url(${checkSvg});
  background-repeat: no-repeat;
  background-size: 38px 38px;
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  width: 42px;
  height: 43px;
`