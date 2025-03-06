import React from 'react';
import { configure, shallow } from 'enzyme';
import { spy } from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import App from '../App';
import Timer from '../Timer';

test("<App /> calls componentDidMount and adds a Timer", () => {
  spy(App.prototype, 'componentDidMount');
  let appWrapper = shallow(<App />);

  expect(App.prototype.componentDidMount.calledOnce).toBe(true);
  expect(appWrapper.find('.TimerGrid').length).toBe(1);
  expect(appWrapper.state('timerIDs').length).toBe(1);

  appWrapper.unmount();
});

test('<Timer /> calls componentDidMount', () => {
  spy(Timer.prototype, 'componentDidMount');
  let timerWrapper = shallow(<Timer />);

  expect(Timer.prototype.componentDidMount.calledOnce).toBe(true);
  timerWrapper.unmount();
});

test('<Timer /> calls componentWillUnmount', () => {
  spy(Timer.prototype, 'componentWillUnmount');
  let timerWrapper = shallow(<Timer />);
  timerWrapper.unmount();
  
  expect(Timer.prototype.componentWillUnmount.calledOnce).toBe(true);
});
