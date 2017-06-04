import {expect} from 'chai';
import SimpleSliderContainer from '../../src/js/containers/SimpleSliderContainer';
import React, {Component} from 'react';
import {createRenderer} from 'react-addons-test-utils';

describe('SimpleSlider Container',  () => {
  it('should render SimpleSlider component',  () => {

    //act
    const renderer = createRenderer();
    renderer.render(<SimpleSliderContainer />);
    let output = renderer.getRenderOutput();

    //assert
    expect((output.type).name).to.equal('SimpleSlider');
  })
})