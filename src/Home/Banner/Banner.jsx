import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';
import AwesomeSlider from 'react-awesome-slider';

const Banner = () => {
    return (
       <div className='lg:-mt-20'>
        <AwesomeSlider>
            <div>
                <img className='w-screen' src="https://i.ibb.co/23TJ2v0/campus2.png" alt="" />
            </div>
            <div>
                <img className='w-screen' src="https://i.ibb.co/2PwNzvB/group-students-posing-table.jpg" alt="" />
            </div>
        </AwesomeSlider>
       </div>
    );
};

export default Banner