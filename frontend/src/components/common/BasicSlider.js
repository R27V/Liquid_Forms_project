import React from 'react';
import HeroSlider , {Slide} from 'hero-slider';

const BasicSlider = () => {

  

    return( 
        <div>
            <HeroSlider>
                <Slide>
                  background={{
                    backgroundImage : ""
                  }} 
                </Slide>
            </HeroSlider>

        </div>
    );
};
export default BasicSlider;