import React, { useRef } from 'react';
import styled from 'styled-components';
import l from 'util/localization';

export default ({ sendMessage, settings }) => {
  const inputEl = useRef(null);

  const send = () => {
    if (!inputEl.current.value.trim()) return false;
    sendMessage({
      message: inputEl.current.value,
      uid: settings.uid,
      fromNickname: settings.userName,
      time: new Date().getTime(),
    });
    inputEl.current.value = '';
  };

  const onKeyDown = e => {
    if (!settings.ctrlEnterSendMsg) return true;
    if (e.keyCode === 13 && e.ctrlKey && inputEl.current.value.trim()) {
      send();
    }
  };

  return (
    <Send>
      <Field type="text" onKeyDown={e => onKeyDown(e)} ref={inputEl} />
      <Submit onClick={() => send()}>{l(`Send`)}</Submit>
    </Send>
  );
};

const Send = styled.div`
  z-index: 2;
  position: relative;
  background-color: ${props => props.theme.bg2};
  padding: 10px 0 5px;
  display: flex;
  flex-direction: row;
`;
const Field = styled.input`
  height: 30px;
  padding-left: 10px;
  border: 2px solid ${props => props.theme.bg2};
  border-radius: 10px;
  outline-width: 0;
  flex-grow: 1;
`;
const Submit = styled.button`
  min-width: 47px;
`;
