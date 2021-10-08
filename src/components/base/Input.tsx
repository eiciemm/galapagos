import styled from 'styled-components';

type Props = {
  maxlength?: number;
  color?: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value: string;
};

const InputBox = styled.input`
  height: 50px;
  border: none;
  font-size: 20px;
  letter-spacing: 1px;
`;

const Input: React.FC<Props> = ({ maxlength, handleInput, className, value }) => {
  return (
    <>
      <InputBox type="text" maxLength={maxlength ?? undefined} value={value} className={className} onChange={handleInput} />
    </>
  );
};

export default Input;
