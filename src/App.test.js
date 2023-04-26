// app.test.js
import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import Board from './Board';
import Square from './Square';

describe('Tic Tac Toe Game', () => {
  it('renders without crashing', () => {
    mount(<App />);
  });

  it('renders Board component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Board)).toHaveLength(1);
  });

  it('renders correct number of Square components', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Square)).toHaveLength(9);
  });

  it('updates game state when a square is clicked', () => {
    const wrapper = mount(<App />);
    const square = wrapper.find(Square).at(0);
    square.simulate('click');
    expect(wrapper.state().squares[0]).not.toBeNull();
  });

  it('resets game state when restart button is clicked', () => {
    const wrapper = mount(<App />);
    const square = wrapper.find(Square).at(0);
    square.simulate('click');
    wrapper.find('.restart-btn').simulate('click');
    expect(wrapper.state().squares).toEqual(Array(9).fill(null));
    expect(wrapper.state().xIsNext).toBe(true);
  });
});
