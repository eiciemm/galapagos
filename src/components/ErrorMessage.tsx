import styled from 'styled-components';
import { Colors } from '../assets/Colors';

type Props = {
  innerText: string;
  className?: string;
};

const Wrapper = styled.div`
  padding: 8px 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  background: ${Colors.red};
  color: ${Colors.white};
`;

// const ErrorMessage = props => {
const ErrorMessage: React.FC<Props> = ({ className, innerText}) => {
  return (
    <Wrapper className={className}>
      <p>{innerText}</p>
    </Wrapper>
  );
};

export default ErrorMessage;
