import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import FeaturedTile from '../FeaturedTile';

describe('FeaturedTitle component', () => {
  it('should render without issues', () => {
    const component = shallow(<FeaturedTile imageSrc={{url: 'http://google.com'}}/>);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
