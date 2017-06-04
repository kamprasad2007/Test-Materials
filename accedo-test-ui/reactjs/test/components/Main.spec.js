import {expect} from 'chai';
import Main from '../../src/js/components/Main';
import React, {Component} from 'react';
import {scryRenderedDOMComponentsWithTag, renderIntoDocument} from 'react-addons-test-utils';

describe('SimpleSlider Component',  () => {
  it('should render div element with the value',  () => {

    //act
    let domTree = renderIntoDocument(<Main  children={null}/>);
    let div = scryRenderedDOMComponentsWithTag(domTree,"div");

    //assert
    expect(div).to.exist;
  })
})