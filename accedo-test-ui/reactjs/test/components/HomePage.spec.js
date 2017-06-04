import {expect} from 'chai';
import HomePage from '../../src/js/components/HomePage';
import React, {Component} from 'react';
import {createRenderer} from 'react-addons-test-utils';

describe('HomePage Component',  () => {
  it('should render SimpleSlider component',  () => {

    //act
    const renderer = createRenderer();
    renderer.render(<HomePage />);
    let output = renderer.getRenderOutput();

    //assert
    expect((output.type).name).to.equal('SimpleSliderContainer');
  })
})