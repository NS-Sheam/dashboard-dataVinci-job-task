import { Link } from "react-router-dom";
import { AiFillShop } from "react-icons/ai";
const SignUp = () => {
    return (
        <div className="hero min-h-screen bg-secondaryB py-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left text-white">
                    <Link to="" className="logo-anim text-5xl my-8 font-bold flex">
                        <AiFillShop className="text-blue-500" /> Swift Mart
                    </Link>
                    <h1 className="text-5xl font-bold">Sign up! Please.</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body bg-secondaryBg border border-white rounded-lg">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Username</span>
                            </label>
                            <input type="text" placeholder="Username" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Confirm password</span>
                            </label>
                            <input type="text" placeholder="Confirm password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-primaryBg hover:bg-bgHover text-white">Sign Up</button>
                        </div>
                        <p className="text-white">Already Have an account? <Link to="/login" className="text-primary underline cursor-pointer">login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;