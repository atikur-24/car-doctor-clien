import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-[61px]'>
            <div className='lg:w-1/2 relative'>
                <img src={person} alt="person" className='rounded-xl w-10/12 h-[300px] md:h-[450px] object-cover' />
                <img src={parts} alt="person" className='rounded-xl absolute border-8 border-white w-[280px] md:w-[372px] md:h-[332px] object-cover -bottom-10 md:top-1/2 right-1 md:right-2' />
            </div>
            <div className='lg:w-1/2 space-y-6 max-h-full pr-6 md:pr-10'>
                <h5 className='text-xl font-semibold md:font-bold text-[#FF3811]'>About Us</h5>
                <h2 className='text-3xl md:text-5xl font-semibold md:font-bold md:leading-[54px] md:tracking-wide'>We are qualified <span className='md:block'></span> & of experience in this field</h2>
                <p className='text-gray-500 md:leading-7'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                <p className='text-gray-500 md:leading-7'>The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <button className='my-btn'>Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;