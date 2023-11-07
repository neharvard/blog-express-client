import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import img from '../../../images/login/login.svg'

// import axios from 'axios';
// import useAuth from '../../hooks/useAuth';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';


const Login = () => {

    // const { signIn } = useAuth();
    // const { signIn } = useContext(AuthContext);

    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the login page', location)

    // Retrieve the user's photo URL from the state parameter
    // const userPhotoURL = location.state ? location.state.userPhotoURL : null;

    // const handleLogin = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(name, email, password)

    //     signIn(email, password)
    //         .then(result => {
    //             const loggedInUser = result.user;
    //             console.log(loggedInUser);
    //             const user = { email };

    //             // get access token
    //             axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
    //                 .then(res => {
    //                     console.log(res.data)
    //                     if (res.data.success) {
    //                         navigate(location?.state ? location?.state : '/')
    //                     }
    //                 })

    //         })
    //         .catch(error => console.log(error));
    // }
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        const photo = form.get("photo");

        // If userPhotoURL is null, use the default or placeholder URL
        // const photoURL = userPhotoURL ;
        console.log('login photo: ', photo);

        signIn(email, password)
            .then(result => {
                console.log("login: ", result.user);

                // Navigate after login
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);

                // Display error message using toast
                toast.error('Login failed. Incorrect email or password.', { autoClose: 3000 });
            });
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
               

                // navigate after login
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
            });
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            {/* <h2>This is login</h2> */}
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" required name="photo" placeholder="Photo URL" className="input input-bordered"/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        {/* Add a Google login button */}
                        <div className="justify-center mt-4 border rounded-md
w-3/5 -mr-12 ml-14 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                            {/* <FaGoogle></FaGoogle> */}
                            <button
                                className="font-semibold py-2 px-4 rounded-md "
                                onClick={handleGoogleLogin}
                            >
                                {/* <img className="w-[30px] h-[20px] " src="https://i.ibb.co/bQd981w/revised-google.gif" alt="" /> */}
                                <span className='ml-5'>Loin with Google</span>
                            </button>
                        </div>

                        {/* <p className="text-center mt-4">
                            Do not have an account{" "}
                            <Link className="text-blue-600 font-bold" to="/register">
                                Register
                            </Link>
                        </p> */}
                    </div>
                    {/* Toast container */}
                    <ToastContainer position="top-right" autoClose={3000} />
                    <p className='my-4 text-center'>New to Blog Express
                        <Link className='text-orange-600 font-bold' to="/signup"> Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Login;