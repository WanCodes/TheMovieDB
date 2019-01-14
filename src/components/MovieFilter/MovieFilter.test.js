import 'raf/polyfill';
import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MovieFilter from './MovieFilter';
import GenreCheckBox from "./GenreCheckBox/GenreCheckBox";

configure({adapter: new Adapter()});

describe('<MovieFilter />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<MovieFilter />);
    });

    it('should render one <GenreCheckBox /> elements if availableGenres has 1 object', () => {
        wrapper.setProps({availableGenres: [{id:28, name:"Action", checked:false}]});
        expect(wrapper.find(GenreCheckBox)).toHaveLength(1);
    });
    

});