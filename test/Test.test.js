import React from 'react';
import { render } from '@testing-library/react-native'
import Test from './Test';

it('renders correctly', () => {
    const prop = (new Date()).toISOString()
    const { toJSON } = render(<Test testProp={prop} />)
    expect(toJSON()).toMatchSnapshot();
});