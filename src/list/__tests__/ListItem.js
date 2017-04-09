import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import ListItem from '../ListItem';

describe('ListItem component', () => {
  it('should render without issues', () => {
    const component = shallow(<ListItem />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
