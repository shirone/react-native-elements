import React from 'react';
import {shallow} from 'enzyme';
import Badge from '../Badge';

describe('FeaturedTitle component', () => {
  it('should render without issues', () => {
    const component = shallow(<Badge badge={{value: 3}}/>);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });
});
