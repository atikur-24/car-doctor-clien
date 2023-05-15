import { Link } from 'react-router-dom';
import logo from '../../assets/images/login/login.svg';
import google from '../../assets/images/login/google.png';
import facebook from '../../assets/images/login/facebook.png';
import twitter from '../../assets/images/login/twitter.png';
import Navbar from '../Shared/Navbar/Navbar';
import { FaEye } from "react-icons/fa";

const SignUp = () => {
    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(name, email, password, confirm );
    }

    return (
        <section>
            <Navbar />
            <div className="my-container">
                <div className="hero min-h-screen">
                    <div className="w-full flex justify-between items-center flex-col lg:flex-row">
                        <div className="w-2/3 lg:w-1/2">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="card w-full lg:w-1/2 border border-inherit">
                            <div className="card-body p-16">
                                <h3 className='text-4xl font-semibold text-center mb-12'>Sign Up</h3>
                                <form onSubmit={handleSignUp} className='space-y-7'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Name</span>
                                        </label>
                                        <input required type="name" placeholder="Your name" name="name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Email</span>
                                        </label>
                                        <input required type="email" placeholder="Your email" name="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control relative">
                                        <label className="label">
                                            <span className="label-text font-semibold">Password</span>
                                        </label>
                                        <input required type="password" placeholder="Your password" name="password" className="input input-bordered" />
                                        <span className='absolute top-[63%] right-4 cursor-pointer'>
                                            <FaEye />
                                        </span>
                                    </div>
                                    <div className="form-control relative">
                                        <label className="label">
                                            <span className="label-text font-semibold">Confirm Password</span>
                                        </label>
                                        <input required type="password" placeholder="Your confirm password" name="confirm" className="input input-bordered" />
                                        <span className='absolute top-[63%] right-4 cursor-pointer'>
                                            <FaEye />
                                        </span>
                                    </div>
                                    <div className="form-control">
                                        <input type="submit" value="Sign Up" className='my-btn' />
                                    </div>
                                    <p className='text-[18px] font-medium text-center'>Or Sign In With</p>
                                    <div className='flex justify-center gap-4'>
                                        <img src={facebook} alt="google" className='bg-[#F5F5F8] p-4 rounded-full cursor-pointer' />
                                        <img src={twitter} alt="google" className='bg-[#F5F5F8] p-4 rounded-full cursor-pointer' />
                                        <img src={google} alt="google" className='bg-[#F5F5F8] p-4 rounded-full cursor-pointer' />
                                    </div>
                                    <p className='text-[18px] text-center text-gray-500'>Already have an account? <Link to='/login' className='text-[#FF3811] font-semibold'>Login</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;