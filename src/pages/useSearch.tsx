import { useState, useCallback } from 'react';
import { API } from '../api/API';

const useSearch = (postalAreaCode: string, localAreaCode: string) => {
  const [address1, setAddress1] = useState<string>('');
  const [address2, setAddress2] = useState<string>('');
  const [address3, setAddress3] = useState<string>('');

  const [isInvalidPostalCode, setIsInvalidPostalCode] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const searchAddress = useCallback(async() => {
    setIsInvalidPostalCode(false);

    const fullPostalCode = postalAreaCode + localAreaCode;
    const response = await API.Address.get(fullPostalCode);

    if (response.results) {
      setAddress1(response.results[0].address1);
      setAddress2(response.results[0].address2);
      setAddress3(response.results[0].address3);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setIsInvalidPostalCode(true);
    }
  }, [postalAreaCode, localAreaCode]);

  const inputAddress1 = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress1(e.target.value);
  }, []);

  const inputAddress2 = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress2(e.target.value);
  }, []);

  const inputAddress3 = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress3(e.target.value);
  }, []);

  const invalidPostalCodeMessage = "郵便番号が無効です";

  return [
    address1,
    address2,
    address3,
    isLoading,
    isInvalidPostalCode,
    invalidPostalCodeMessage,
    searchAddress,
    inputAddress1,
    inputAddress2,
    inputAddress3
  ] as const;
};

export default useSearch;
