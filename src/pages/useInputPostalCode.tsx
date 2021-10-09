import { useState, useEffect, useCallback } from 'react';
import { POSTAL_AREA_CODE_LENGTH, LOCAL_AREA_CODE_LENGTH } from '../constants';

const useInputPostalCode = () => {
  const [postalAreaCode, setPostalAreaCode] = useState<string>('');
  const [localAreaCode, setLocalAreaCode] = useState<string>('');
  const [isInputModeError, setIsInputModeError] = useState(false);
  const [isSearchClickable, setIsSearchClickable] = useState(false);

  useEffect(() =>{
    if (
      !isInputModeError &&
      postalAreaCode.length === POSTAL_AREA_CODE_LENGTH &&
      localAreaCode.length === LOCAL_AREA_CODE_LENGTH
    ) {
      setIsSearchClickable(true);
    } else {
      setIsSearchClickable(false);
    }
  },[isInputModeError, postalAreaCode, localAreaCode]);

  const inputPostalAreaCode = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    checkInputMode(e.target.value);
    setPostalAreaCode(e.target.value);
  }, []);

  const inputLocalAreaCode = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    checkInputMode(e.target.value);
    setLocalAreaCode(e.target.value);
  }, []);

  const checkInputMode = (inputValue: string) => {
    const isError = isNaN(Number(inputValue));
    if (isError) {
      setIsInputModeError(true);
    } else {
      setIsInputModeError(false);
    }
  }

  const inputModeErrorMessage = "半角数字で入力してください";

  return [
    inputPostalAreaCode,
    inputLocalAreaCode,
    postalAreaCode,
    localAreaCode,
    isSearchClickable,
    isInputModeError,
    inputModeErrorMessage
  ] as const;
};

export default useInputPostalCode;
