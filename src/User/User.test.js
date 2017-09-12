import React from 'react';
import 'jest-enzyme';
import { shallow, mount } from 'enzyme';
import User from './User';

describe('<User />', () => {
    const wrapper = shallow(<User />);

    it('renders without crashing', () => {
        shallow(<User />);
    });

    it('has a div with class User', () => {
        expect(wrapper.find('.User')).toHaveClassName('User');        
    });

    it('has a h1 with text GitHub Followers', () => {
        expect(wrapper.find('h1')).toHaveText('GitHub Followers');
    })

    it('has a main and aside html elements', () => {
        expect(wrapper.find('main')).toBePresent();
        expect(wrapper.find('aside')).toBePresent();
    })

});