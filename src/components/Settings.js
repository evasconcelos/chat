import React from 'react';
import styled from 'styled-components';
import l from 'utils/localization';

export default ({ settings, setSettingsItem, resetSettings }) => (
  <Container>
    <h1>{l(`Settings`)}</h1>
    <SettingsItem>
      <label>
        <SettingName>{l(`User name`)}</SettingName>
        <input
          type="text"
          name="userName"
          value={settings.userName}
          maxLength="20"
          onChange={e => {
            setSettingsItem('userName', e.target.value);
          }}
        />
      </label>
    </SettingsItem>

    <SettingsItem>
      <SettingName>{l(`Interface Color`)}</SettingName>
      <label>
        <input
          type="radio"
          name="interfaceColor"
          value="light"
          checked={settings.lightTheme === true}
          onChange={() => setSettingsItem('lightTheme', true)}
        />
        {l(`Light`)}
      </label>
      <label>
        <input
          type="radio"
          name="interfaceColor"
          value="dark"
          checked={settings.lightTheme === false}
          onChange={() => setSettingsItem('lightTheme', false)}
        />
        {l(`Dark`)}
      </label>
    </SettingsItem>

    <SettingsItem>
      <SettingName>{l(`Clock Display`)}</SettingName>
      <label>
        <input
          type="radio"
          name="clockDisplay12h"
          value="12"
          checked={settings.clockDisplay12h === true}
          onChange={() => setSettingsItem('clockDisplay12h', true)}
        />
        {l(`12 Hours`)}
      </label>
      <label>
        <input
          type="radio"
          name="clockDisplay12h"
          value="24"
          checked={settings.clockDisplay12h === false}
          onChange={() => setSettingsItem('clockDisplay12h', false)}
        />
        {l(`24 Hours`)}
      </label>
    </SettingsItem>

    <SettingsItem>
      <SettingName>{l(`Send messages on CTRL+ENTER`)}</SettingName>
      <label>
        <input
          type="radio"
          name="ctrlEnterSendMsg"
          value="yes"
          checked={settings.ctrlEnterSendMsg === true}
          onChange={() => setSettingsItem('ctrlEnterSendMsg', true)}
        />
        {l(`On`)}
      </label>
      <label>
        <input
          type="radio"
          name="ctrlEnterSendMsg"
          value="no"
          checked={settings.ctrlEnterSendMsg === false}
          onChange={() => setSettingsItem('ctrlEnterSendMsg', false)}
        />
        {l(`Off`)}
      </label>
    </SettingsItem>

    <SettingsItem>
      <label>
        <SettingName>{l(`Language`)}</SettingName>
        <select
          name="language"
          value={settings.language}
          onChange={e => {
            setSettingsItem('language', e.target.value);
          }}
        >
          <option value="EN">English</option>
          <option value="PT">Português</option>
        </select>
      </label>
    </SettingsItem>

    <SettingsItem>
      <ResetBtn onClick={() => resetSettings()}>
      {l(`Reset to default settings`)}
      </ResetBtn>
    </SettingsItem>
  </Container>
);

const Container = styled.div`
  padding: 20px 10px;
  width: 100%;
`;
const SettingsItem = styled.div`
  margin-top: 20px;
`;
const SettingName = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
`;

const ResetBtn = styled.button`
  margin-top: 50px;
  width: 100%;
  height: 3em;
`;
