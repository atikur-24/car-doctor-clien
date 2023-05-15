import { Link } from 'react-router-dom';
import logo from '../../assets/images/login/login.svg';
import google from '../../assets/images/login/google.png';
import facebook from '../../assets/images/login/facebook.png';
import twitter from '../../assets/images/login/twitter.png';
import Navbar from '../Shared/Navbar/Navbar';
import { useContext, useRef } from 'react';
import { AuthContext } from '../../providers/Authprovider';
import Swal from 'sweetalert2';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import app from '../../firebase/firebase.config';
const auth = getAuth(app);

const Login = () => {
    const { userLogin, googleSignIn } = useContext(AuthContext);
    const emailRef = useRef();

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        // email password sign in
        userLogin(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                const message = error.message;
                console.log(message);
                Swal.fire({
                    title: 'Error!',
                    text: message,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                  })               
            })
    }

    // google sign in
    const handleGoogleLogin = () => {
            googleSignIn()
                .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
                })
                .catch(error => {
                    const message = error.message;
                    console.log(message);
                })
    }

    // forgot password
    const handleForgotPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            return Swal.fire({
                title: 'Warning!',
                text: 'Please provide valid email address',
                icon: 'warning',
                confirmButtonText: 'Ok'
              })
        }
        sendPasswordResetEmail(auth, email)
            .then( () => {
                Swal.fire({
                    title: 'Password Reset',
                    text: 'Please check your email address',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                    })
            })
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
                                <h3 className='text-4xl font-semibold text-center mb-12'>Login</h3>
                                <form onSubmit={handleLogin} className='space-y-7'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Email</span>
                                        </label>
                                        <input ref={emailRef} required type="email" placeholder="Your email" name="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Password</span>
                                        </label>
                                        <input required type="password" placeholder="Your password" name="password" className="input input-bordered" />
                                        <label className="label">
                                            <p onClick={handleForgotPassword} className="label-text-alt link link-hover">Forgot password?</p>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <input type="submit" value="Sign In" className='my-btn' />
                                    </div>
                                    <p className='text-[18px] font-medium text-center'>Or Sign In With</p>
                                    <div className='flex justify-center gap-4'>
                                        <img src={facebook} alt="google" className='bg-[#F5F5F8] p-4 rounded-full cursor-pointer' />
                                        <img src={twitter} alt="google" className='bg-[#F5F5F8] p-4 rounded-full cursor-pointer' />
                                        <img onClick={handleGoogleLogin} src={google} alt="google" className='bg-[#F5F5F8] p-4 rounded-full cursor-pointer' />
                                    </div>
                                    <p className='text-[18px] text-center text-gray-500'>To New Car Doctor? <Link to='/signUp' className='text-[#FF3811] font-semibold'>Sign Up</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;