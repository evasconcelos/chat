import React, { useRef } from 'react';
import styled from 'styled-components';
export default ({ sendMessage }) => {
  const inputEl = useRef(null);

  const onKeyUp = e => {
    if (e.keyCode === 13 && inputEl.current.value) {
      sendMessage({
        message: inputEl.current.value,
        self: true,
        fromNickname: 'me',
        time: new Date().getTime(),
      });
      inputEl.current.value = '';
    }
  };

  return (
    <Send>
      <Field type="text" onKeyUp={e => onKeyUp(e)} ref={inputEl} />
    </Send>
  );
};

const Send = styled.div`
  z-index: 2;
  position: relative;
  background-color: ${props => props.theme.bg2};
  padding: 10px 0 5px;
`;
const Field = styled.input`
  width: 100%;
  height: 30px;
  padding-left: 10px;
  border: 2px solid ${props => props.theme.bg2};
  border-radius: 10px;
  outline-width: 0;
`;
