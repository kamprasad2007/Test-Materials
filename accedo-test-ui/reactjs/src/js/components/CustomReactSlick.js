import Slider from 'react-slick';

//extend Slider component
export default class CustomReactSlider extends Slider {
    
    constructor(props){
        //calling base class constructor
        super(props)
    }

    componentDidMount(){
        //listening to global keydown event
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount(){
        //remove global keydown listener
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    //handle UP and DOWN key events
    handleKeyDown = e => {
        if(e.keyCode === 38){
            this.innerSlider.slickPrev();
        }else if(e.keyCode === 40){
            this.innerSlider.slickNext();
        }
    }
}