import React from 'react';
import 'jest-enzyme';
import { shallow } from 'enzyme';
import Follower from './Follower';

describe('<Follower />', () => {
    const wrapper = shallow(<Follower />);
    
    it('renders without crashing', () => {
        shallow(<Follower />);
    });

    it('renders a div with class Follower', () => {
        expect(wrapper.find('.Follower')).toHaveClassName('Follower');        
    });

    it('has <div>, <a> and <img> tags', () => {
        expect(wrapper.find('div')).toBePresent();
        expect(wrapper.find('a')).toBePresent();
        expect(wrapper.find('img')).toBePresent();
    });

});