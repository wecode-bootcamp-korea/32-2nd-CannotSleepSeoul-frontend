import React, { useState } from 'react';
import styled from 'styled-components';

const AddReserve = ({ data, changeValue }) => {
  const [value, setValue] = useState(data.value);

  const handleOnChangeValue = e => {
    setValue(e.target.value);
  };

  return (
    <Input>
      <Title>{data.title}</Title>
      {changeValue ? (
        <input value="" type="text" placeholder={data.otherValue} />
      ) : (
        <input type="text" value={value} onChange={handleOnChangeValue} />
      )}
    </Input>
  );
};
export default AddReserve;

const Input = styled.div`
  margin-bottom: 20px;
  input {
    width: 250px;
    height: 40px;
    padding-left: 5px;
    border: 1px solid ${props => props.theme.border};
  }
`;

const Title = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
`;
