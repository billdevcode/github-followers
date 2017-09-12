import React from 'react';
import 'jest-enzyme';
import { shallow } from 'enzyme';
import Followers from './Followers';

describe('<Followers />', () => {
        
    it('renders without crashing', () => {
        shallow(<Followers />);
    });

    it('renders a div with class Followers', () => {
        const wrapper = shallow(<Followers listOfFollowers={[]} />);
        expect(wrapper.find('.Followers')).toHaveClassName('Followers');        
    });
});