import 'raf/polyfill';
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GenreCheckBox from './GenreCheckBox';

configure({adapter: new Adapter()});

describe('<GenreCheckBox />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<GenreCheckBox />);
    });

    it('label should have value of Action when prop.label=Action', () => {
        wrapper.setProps({label:"Action"});
        expect(wrapper.find('label').text()).toEqual('Action');
    });

    it('label should have class "checked" if prop.checked=true', () => {
        wrapper.setProps({checked:true});
        expect(wrapper.find('label.checked').length).toEqual(1);
    });
});