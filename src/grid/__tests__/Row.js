import React from 'react';
import {Text} from 'react-native';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Row from '../Row';

describe('Row Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Row />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render children', () => {
    const component = shallow(<Row><Text>Hi</Text></Row>);

    expect(component.find('Text').length).toBe(1);
  });
});
