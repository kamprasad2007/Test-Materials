import {expect} from 'chai';
import SimpleSlider from '../../src/js/components/SimpleSlider';
import React, {Component} from 'react';
import {
  scryRenderedDOMComponentsWithTag, 
  renderIntoDocument, 
  createRenderer, Simulate ,findRenderedDOMComponentWithTag} from 'react-addons-test-utils';
import { findDOMNode } from 'react-dom'

describe('SimpleSlider Component',  () => {
  it('should render div element Loading message when passing empty data',  () => {

    //arrange
    let simpleSlider = new SimpleSlider();
    let data = [];

    //act
    const renderer = createRenderer();
    renderer.render(<SimpleSlider  videoData={data}/>);
    let output = renderer.getRenderOutput();

    //assert
    expect(output.props.children).to.equal('Loading videos ...');

  });

  it('should render Slide element with title and image when passing data',  () => {

    //arrange
    let simpleSlider = new SimpleSlider();
    let data = [{id:1, title:'' , img:''},{id:2 , title:'', img:''}];
    simpleSlider.setState({
      settings:{}
    });

    //act
    let domTree = renderIntoDocument(<SimpleSlider  videoData={data}/>);
    let images = scryRenderedDOMComponentsWithTag(domTree,"img");
    
    //assert
    expect(images.length).to.equal(data.length);
  });

});