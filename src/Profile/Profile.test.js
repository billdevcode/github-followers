import React from 'react';
import 'jest-enzyme';
import { shallow } from 'enzyme';
import Profile from './Profile';

describe('<Profile />', () => {
        
    it('renders without crashing', () => {
        shallow(<Profile />);
    });

    it('renders a div with class Profile', () => {
        const wrapper = shallow(<Profile user={{}} />);
        expect(wrapper.find('.Profile')).toHaveClassName('Profile');        
    });

});