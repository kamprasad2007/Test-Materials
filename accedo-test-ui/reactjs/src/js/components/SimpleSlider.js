import React from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';
import CustomReactSlider from './CustomReactSlick';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class SimpleSlider extends React.Component {
	constructor(props) {
		super(props);
		this.state =  {
			settings: {
				accessibility: false, // disable default keys event
				dots: false,
				focusOnSelect: true,
				infinite: false,
				slidesToShow: 5, //default slides to show 
				slidesToScroll: 5, //default slides to scroll
				speed: 1500,
				responsive: [{
					breakpoint: 1024, //Screen resolution
					settings: {
						slidesToShow: 5,
						slidesToScroll: 5,
						infinite: false,
					}
				},{
					breakpoint: 900,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
						infinite: false,
					}
				},{
					breakpoint: 700,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: false,
						
					}
				},{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: false,
						
					}
				}]
			}
		};
	}

	componentWillMount(event){
		//set total record to the setting object.
		//this is moved to here because unit test was failed 
		this.state.settings.slideCount = this.props.videoData.length;
	}
	
	render() {
		let videos = this.props.videoData;
		if (!videos || videos.length === 0) {
			return(<div>Loading videos ...</div>);
		}

		let slides = videos.map(video => {
			return (
				// animation for each element in carousel
				 <ReactCSSTransitionGroup key={video.id.toString()}   
				 	transitionName="example"
					transitionAppear={true}
					transitionAppearTimeout={1000}
					transitionEnter={false}
					transitionLeave={false}>
					<div className={"article"}  title={video.desc}>
						<div className={"title"}>{video.title}</div>
						<div className={"desc"}>{video.desc}</div>
						<img src={video.img}/>
					</div>
				 </ReactCSSTransitionGroup>
			);
		});
		return (
			<CustomReactSlider {...this.state.settings} >
				{slides}
			</CustomReactSlider>
		);
	}
}