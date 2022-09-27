import { ButtonStyle } from "./style";

interface ButtonProps {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void,
}

export const Button = ({ type = "button", onClick, title }: ButtonProps) => {
  return(
    <ButtonStyle onClick={onClick} type={type}> {title} </ButtonStyle>
    //se tiver um click a função que estamos passando via props será executada
  );
}

