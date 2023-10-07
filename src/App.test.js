import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import App from './App';
import store from './redux/store';

describe('TodoApp', () => {
  test('renders TodoApp component', () => {
    const container = render(<Provider store={store}><App /></Provider>);
    const input = container.getByRole('textbox');
    const button = container.getByRole('button');
    const list = container.getByRole('list');
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'Learn Redux' } });
    fireEvent.click(button);
    expect(list).toHaveTextContent('Learn Redux');
  });
  test('matches snapshot', () => {
    const tree = renderer.create(<Provider store={store}><App /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});