import styled from 'styled-components'
import { Colors } from '../../assets/Colors'

type Props = {
  innertext: string;
  color?: string;
  onClick: () => void;
  isActive: boolean;
};

const Wrapper = styled.button<{isActive: boolean}>`
  width: 100%;
  padding: 22px 0;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  color: ${Colors.white};
  background: ${(props) => props.color ?? Colors.blue};
  pointer-events: ${(props) => props.isActive ? "auto" : "none"};
  opacity: ${(props) => props.isActive ? "1" : "0.5"};
  cursor: ${(props) => props.isActive ? "pointer" : "auto"};
`;

// const Button = props: Props => {
const Button: React.FC<Props> = ({ innertext, color, onClick, isActive }) => {
//   const { innertext, color, onClick, isActive } = props;
  return (
    <Wrapper color={color} onClick={onClick} isActive={isActive}>
      {innertext}
    </Wrapper>
  );
};

export default Button;
