import React from 'react';
import { shallow } from 'enzyme';
import SingleMessage from './SingleMessage';
// import toJson from 'enzyme-to-json';

const testValues = {
  fromNickname: 'SomeRandomNickname',
  message: 'This is a random message',
  timestamp: 1569811180847,
  timestampFormatted: '11:39 PM',
};
const wrapper = shallow(
  <SingleMessage
    self={true}
    fromNickname={testValues.fromNickname}
    time={testValues.timestamp}
    clockDisplay12h={true}
  >
    {testValues.message}
  </SingleMessage>
);
it('Matches testValues: nickname', () => {
  expect(wrapper.find('[data-js-nickname]').text()).toBe(
    testValues.fromNickname
  );
});
it('Matches testValues: message', () => {
  expect(wrapper.find('[data-js-message]').text()).toBe(testValues.message);
});

it('Matches testValues: timestamp', () => {
  expect(wrapper.find('[data-js-timestamp]').text()).toBe(
    testValues.timestampFormatted
  );
});
