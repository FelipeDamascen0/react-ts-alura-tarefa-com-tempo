import styled from "styled-components";

export const StopWatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  
  p{
    font-size: 2rem;
  }

  div{
    align-items: center;
    background-color: #7687A1;
    border-radius: 10px;
    box-shadow: 2px 4px 4px #0000009F;
    box-sizing: border-box;
    display: flex;
    font-size: 5rem;
    justify-content: center;
    margin-bottom: 24px;
    padding: 16px 12px;
    width: 100%;
  }

  @media screen and (min-width:1280px) {
    
    div{
      font-size: 12rem;
      text-align: center;
    }

    p {
      font-size: 2rem;
    }
  }
`