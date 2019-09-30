import React from 'react';
import { shallow } from 'enzyme';
import Settings from './Settings';
import toJson from 'enzyme-to-json';

const fakeSettings = {
  lightTheme: true,
  clockDisplay12h: true,
  ctrlEnterSendMsg: true,
  uid: '1234567890',
  userName: 'Guest',
  language: 'EN',
};
const wrapper = shallow(
  <Settings
    settings={fakeSettings}
    setSettingsItem={jest.fn()}
    resetSettings={jest.fn()}
  />
);
it('Matches snapshot', () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});
