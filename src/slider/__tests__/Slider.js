import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Slider from '../Slider';

describe('Slider component', () => {
  it('should render without issues', () => {
    const component = shallow(<Slider />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
