import React from 'react';
import styled from 'styled-components';
import InputPostalCode from "../templates/InputPostalCode";
import ErrorMessage from "../components/ErrorMessage";
import SearchResult from "../templates/SearchResult";
import useInputPostalCode from './useInputPostalCode';
import useSearch from './useSearch';

const Wrapper = styled.div`
  width: 92%;
  margin: 20px auto;
  position: relative;
`;

const Caption = styled.p`
  font-size: 14px;
  margin: 0;
`;

const Loading = styled.div`
  position: absolute;
  top: 190px;
  left: calc(50% - 30px);
  > img {
    width: 60px;
  }
`;

const Address: React.FC = () => {
  const [
    inputPostalAreaCode,
    inputLocalAreaCode,
    postalAreaCode,
    localAreaCode,
    isSearchClickable,
    isInputModeError,
    inputModeErrorMessage
  ] = useInputPostalCode();

  const [
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
  ] =useSearch(postalAreaCode, localAreaCode);

  const isErrorShown = isInputModeError || isInvalidPostalCode;
  const errorMessage = isInputModeError ? inputModeErrorMessage : invalidPostalCodeMessage;

  return (
    <Wrapper>
      <Caption>郵便番号を入力してください</Caption>

      <InputPostalCode
        inputPostalAreaCode={inputPostalAreaCode}
        postalAreaCode={postalAreaCode}
        inputLocalAreaCode={inputLocalAreaCode}
        localAreaCode={localAreaCode}
        isSearchClickable={isSearchClickable}
        onClickSearchBtn={searchAddress}
      />

      {isErrorShown && <ErrorMessage innerText={errorMessage} />}

      <SearchResult
        inputAddress1={inputAddress1}
        inputAddress2={inputAddress2}
        inputAddress3={inputAddress3}
        address1={address1}
        address2={address2}
        address3={address3}
      />

      {isLoading && (
        <Loading><img src={`${process.env.PUBLIC_URL}/loading.gif`} alt="" /></Loading>
      )}
    </Wrapper>
  );
};

export default React.memo(Address);
