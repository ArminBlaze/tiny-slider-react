import React, { Component } from 'react';
import '../node_modules/tiny-slider/dist/tiny-slider.css';
import { tns } from "tiny-slider";
 
class SliderClass extends Component {
  setContainerRef = (ref) => {
    if(ref) {
      tns({
        container: '.my-slider',
        items: 1,
        slideBy: 1,
        autoplay: false
      });
    }
  }


  render() { 
    return (
      <div>
        Slider Class
        <div className="my-slider" ref={this.setContainerRef}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
      </div>
    );
  }
}
 
export default SliderClass;