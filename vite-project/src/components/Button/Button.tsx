import { IProps } from "../../interfaces/ButtonInterface";
import { ButtonContainer } from "./style";

export const Button = ({
  children,
  onClick,
  variant = "orange1",
  buttonSize,
  disabled = false,
  className,
  type,
}: IProps) => {
  return (
    <ButtonContainer
      variant={variant}
      className={className}
      buttonSize={buttonSize}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
