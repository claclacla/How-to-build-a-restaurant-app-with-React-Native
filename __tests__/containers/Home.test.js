import React from 'react';
import Home from '../../src/containers/Home';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});