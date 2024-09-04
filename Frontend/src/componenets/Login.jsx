import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-900 dark:text-white">
                    <form onSubmit={handleSubmit(onSubmit)}> {/* Removed method="dialog" */}
                        {/* Close button for the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                        <h3 className="font-bold text-lg">Login</h3>
                        
                        {/* Email */}
                        <div className='mt-4 space-y-3'>
                            <span>Email</span>
                            <br />
                            <input
                                type='email'
                                placeholder='Enter your email'
                                className='w-80 px-3 py-1 rounded-md outline-none'
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-500">Email is required</span>}
                        </div>

                        {/* Password */}
                        <div className='mt-4 space-y-3'>
                            <span>Password</span>
                            <br />
                            <input
                                type='password'
                                placeholder='Enter your password'
                                className='w-80 px-3 py-1 rounded-md outline-none'
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-red-500">Password is required</span>}
                        </div>

                        {/* Button */}
                        <div className='flex justify-around mt-6'>
                            <button type='submit' className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'>
                                Login
                            </button>
                            <p>Not registered?
                                <Link
                                    to="/signup"
                                    className="underline text-blue-700 cursor-pointer"
                                >
                                    Signup
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
