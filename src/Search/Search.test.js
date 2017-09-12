import React from 'react';
import 'jest-enzyme';
import { shallow } from 'enzyme';
import Search from './Search';

describe('<Search />', () => {
    const wrapper = shallow(<Search />);
    
    it('renders without crashing', () => {
        shallow(<Search />);
    });

    it('renders a div with class Search', () => {
        expect(wrapper.find('.Search')).toHaveClassName('Search');        
    });

    it('renders 2 input tags', () => {
        expect(wrapper.find('form')).toBePresent();
        expect(wrapper.find('input')).toBePresent();
    });

});