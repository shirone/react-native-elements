import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import SocialIcon from '../SocialIcon';

describe('SocialIcon component', () => {
  it('should render without issues', () => {
    const component = shallow(<SocialIcon type="twitter"/>);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
