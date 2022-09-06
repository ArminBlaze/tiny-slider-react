import React, { useCallback } from 'react';
import '../../node_modules/tiny-slider/dist/tiny-slider.css';
import { tns } from "tiny-slider";
import classes from './Slider.module.scss'

let slider;



const Slider = () => {

 


  // const prevButton = <button className={classes.Button} type='button'>Назад</button>
  // const nextButton = <button className={classes.Button} type='button'>Вперёд</button>

  const sliderRef = useCallback(node => {
    if (node) {
      slider = tns({
        container: node,
        items: 1,
        slideBy: 1,
        autoplay: true,
        controlsContainer: '.Slider__Controls',
        navContainer: `.${classes.Slider_Nav}`,
        autoplayButton: `.${classes.Autoplay}`,
        autoplayHoverPause: true
      });

      console.log(slider.getInfo())
    }
  }, []);

  
  return (
    <div  className={classes.Slider}>
      <div ref={sliderRef}>
        <div className={classes.Slide}>1</div>
        <div className={classes.Slide}>2</div>
        <div className={classes.Slide}>3</div>
        <div className={classes.Slide}>4</div>
        <div className={classes.Slide}>5</div>
        <div className={classes.Slide}>6</div>
      </div>

      <div className='Slider__Controls'>
        <button className={[classes.Button, classes.Button_prev].join(' ')} type='button'>Назад</button>
        <button className={[classes.Button, classes.Button_next].join(' ')} type='button'>Вперёд</button>
      </div>

      <div className={classes.Slider_Nav}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
      </div>

      <div className={classes.Autoplay}></div>
    </div>
  );
}
 
Slider.propTypes = {};
 
export default Slider;