import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'
import banner5 from '../../../assets/images/banner/5.jpg'
import banner6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full md:h-[600px]">
                <img src={banner1} className="w-full rounded-xl" />
                <div className='absolute h-full rounded-xl flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                    <div className='text-white space-y-7 md:w-1/2 ml-6 md:ml-24'>
                        <h2 className='text-3xl md:text-6xl font-bold tracking-wide lg:leading-tight'>Affordable <br /> Price For Car Servicing</h2>
                        <p className='md:tracking-wide lg:leading-7 capitalize'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='my-btn mr-5'>Discover More</button>
                            <button className='rounded-md px-3 py-2 md:px-6 md:py-4 text-[18px] border font-semibold text-white hover:bg-[#FF3811] hover:border-[#FF3811] transition duration-200'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-6 md:right-12 bottom-6 md:bottom-12">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle border-none bg-[#FF3811] hover:bg-[#db3412]">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full md:h-[600px]">
                <img src={banner2} className="w-full rounded-xl" />
                <div className='absolute h-full rounded-xl flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                    <div className='text-white space-y-7 md:w-1/2 ml-6 md:ml-24'>
                        <h2 className='text-3xl md:text-6xl font-bold tracking-wide lg:leading-tight'>Affordable <br /> Price For Car Servicing</h2>
                        <p className='md:tracking-wide lg:leading-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='my-btn mr-5'>Discover More</button>
                            <button className='rounded-md px-3 py-2 md:px-6 md:py-4 text-[18px] border font-semibold text-white hover:bg-[#FF3811] hover:border-[#FF3811] transition duration-200'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-6 md:right-12 bottom-6 md:bottom-12">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle border-none bg-[#FF3811] hover:bg-[#db3412]">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full md:h-[600px]">
                <img src={banner3} className="w-full rounded-xl" />
                <div className='absolute h-full rounded-xl flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                    <div className='text-white space-y-7 md:w-1/2 ml-6 md:ml-24'>
                        <h2 className='text-3xl md:text-6xl font-bold tracking-wide lg:leading-tight'>Affordable <br /> Price For Car Servicing</h2>
                        <p className='md:tracking-wide lg:leading-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='my-btn mr-5'>Discover More</button>
                            <button className='rounded-md px-3 py-2 md:px-6 md:py-4 text-[18px] border font-semibold text-white hover:bg-[#FF3811] hover:border-[#FF3811] transition duration-200'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-6 md:right-12 bottom-6 md:bottom-12">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle border-none bg-[#FF3811] hover:bg-[#db3412]">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full md:h-[600px]">
                <img src={banner4} className="w-full rounded-xl" />
                <div className='absolute h-full rounded-xl flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                    <div className='text-white space-y-7 md:w-1/2 ml-6 md:ml-24'>
                        <h2 className='text-3xl md:text-6xl font-bold tracking-wide lg:leading-tight'>Affordable <br /> Price For Car Servicing</h2>
                        <p className='md:tracking-wide lg:leading-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='my-btn mr-5'>Discover More</button>
                            <button className='rounded-md px-3 py-2 md:px-6 md:py-4 text-[18px] border font-semibold text-white hover:bg-[#FF3811] hover:border-[#FF3811] transition duration-200'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-6 md:right-12 bottom-6 md:bottom-12">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide5" className="btn btn-circle border-none bg-[#FF3811] hover:bg-[#db3412]">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full md:h-[600px]">
                <img src={banner5} className="w-full rounded-xl" />
                <div className='absolute h-full rounded-xl flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                    <div className='text-white space-y-7 md:w-1/2 ml-6 md:ml-24'>
                        <h2 className='text-3xl md:text-6xl font-bold tracking-wide lg:leading-tight'>Affordable <br /> Price For Car Servicing</h2>
                        <p className='md:tracking-wide lg:leading-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='my-btn mr-5'>Discover More</button>
                            <button className='rounded-md px-3 py-2 md:px-6 md:py-4 text-[18px] border font-semibold text-white hover:bg-[#FF3811] hover:border-[#FF3811] transition duration-200'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-6 md:right-12 bottom-6 md:bottom-12">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide6" className="btn btn-circle border-none bg-[#FF3811] hover:bg-[#db3412]">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full md:h-[600px]">
                <img src={banner6} className="w-full rounded-xl" />
                <div className='absolute h-full rounded-xl flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                    <div className='text-white space-y-7 md:w-1/2 ml-6 md:ml-24'>
                        <h2 className='text-3xl md:text-6xl font-bold tracking-wide lg:leading-tight'>Affordable <br /> Price For Car Servicing</h2>
                        <p className='md:tracking-wide lg:leading-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='my-btn mr-5'>Discover More</button>
                            <button className='rounded-md px-3 py-2 md:px-6 md:py-4 text-[18px] border font-semibold text-white hover:bg-[#FF3811] hover:border-[#FF3811] transition duration-200'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-6 md:right-12 bottom-6 md:bottom-12">
                    <a href="#slide5" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle border-none bg-[#FF3811] hover:bg-[#FF3811]">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;