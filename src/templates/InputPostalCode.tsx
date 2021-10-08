import styled from 'styled-components';
import Input from "../components/base/Input";
import Button from "../components/base/Button";
import { Colors } from '../assets/Colors';
import { POSTAL_AREA_CODE_LENGTH, LOCAL_AREA_CODE_LENGTH } from '../constants';

type Props = {
  inputPostalAreaCode: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputLocalAreaCode: (e: React.ChangeEvent<HTMLInputElement>) => void;
  postalAreaCode: string;
  localAreaCode: string;
  isSearchClickable: boolean;
  onClickSearchBtn: () => void;
};

const Wrapper = styled.div`
  width: 100%;
  margin: 8px auto 0;
  display: flex;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: 80%;
  margin: 12px 0;
  padding: 8px;
  background: ${Colors.gray};
  border-radius: 4px;
  display: flex;
  align-items: center;
  > p {
    font-size: 30px;
    margin: 0 20px;
  }
`;

const StyledInput = styled(Input)`
  width: 50%;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  width: 20%;
  margin-left: 8px;
`;

const InputPostalCode: React.FC<Props> = ({
  inputPostalAreaCode,
  inputLocalAreaCode,
  postalAreaCode,
  localAreaCode,
  isSearchClickable,
  onClickSearchBtn
}) => {
  return (
    <Wrapper>
      <InputWrapper>
        <StyledInput maxlength={POSTAL_AREA_CODE_LENGTH} handleInput={inputPostalAreaCode} value={postalAreaCode} />
        <p>-</p>
        <StyledInput maxlength={LOCAL_AREA_CODE_LENGTH} handleInput={inputLocalAreaCode} value={localAreaCode} />
      </InputWrapper>
      <ButtonWrapper>
        <Button onClick={onClickSearchBtn} isActive={isSearchClickable} innertext="住所検索" />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default InputPostalCode;
