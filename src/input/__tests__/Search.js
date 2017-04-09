import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Search from '../Search';

describe('Search component', () => {
  it('should render without issues', () => {
    const component = shallow(<Search />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
