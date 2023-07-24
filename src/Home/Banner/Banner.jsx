import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';
import AwesomeSlider from 'react-awesome-slider';

const Banner = () => {
    return (
       <div className='lg:-mt-38'>
        <AwesomeSlider>
            <div>
                <img className='w-screen' src="https://i.ibb.co/jVTLDvs/campussss.png" alt="" />
            </div>
            <div>
                <img className='w-screen' src="https://i.ibb.co/23TJ2v0/campus2.png" alt="" />
            </div>
        </AwesomeSlider>
       </div>
    );
};

export default Banner