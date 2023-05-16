import topBanner from '../../../assets/images/checkout/checkout.png'

const TopBanner = ({ children }) => {
    return (
        <div className='relative'>
            <img src={topBanner} className='w-full rounded-lg' alt="banner" />
            <div className='rounded-lg top-0 h-full w-full absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
               <h3 className='text-white text-[45px] absolute top-1/3 left-24 font-bold'> { children } </h3>
               <div className='absolute text-white bg-[#FF3811] bottom-0 right-1/2 w-72 py-3 text-center'>
                 Home / {children}
               </div>
            </div>
        </div>
    );
};

export default TopBanner;