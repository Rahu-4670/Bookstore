import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form';

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <div className='flex  h-screen  mt-20 justify-center '>
                <div className="w-[600px] ">
                    <div className="modal-box dark:bg-slate-900 dark:text-white">
                        <form onSubmit={handleSubmit(onSubmit)} >
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg">Signup</h3>
                            {/*full name*/}
                            <div className='mt-4 space-y-3'>
                                <span> Name</span>
                                <br />
                                <input
                                    type='text'
                                    placeholder='Enter your Full Name'
                                    className='w-80 px-3 py-1 rounded-md outline-none '
                                    {...register("text", { required: true })} />
                                     {errors.text && <span className="text-red-500">Name is required</span>}
                            </div>
                            {/*Country*/}
                            <div className='mt-4 space-y-3'>
                                <span>Country</span>
                                <br />
                                <input
                                    type='text'
                                    placeholder='Enter your Country'
                                    className='w-80 px-3 py-1 rounded-md outline-none ' 
                                    {...register("text", { required: true })}/>
                                     {errors.text && <span className="text-red-500">Country is required</span>}

                            </div>

                            {/*email*/}
                            <div className='mt-4 space-y-3'>
                                <span>Email</span>
                                <br />
                                <input
                                    type='email'
                                    placeholder='Enter your Email'
                                    className='w-80 px-3 py-1 rounded-md outline-none '
                                    {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                            </div>
                            {/*password*/}
                            <div className='mt-4 space-y-3'>
                                <span>Password</span>
                                <br />
                                <input
                                    type='password'
                                    placeholder='Enter your Passwod'
                                    className='w-80 px-3 py-1 rounded-md outline-none '
                                    {...register("password", { required: true })} />
                                {errors.password && <span className="text-red-500">Password is required</span>}

                            </div>
                            {/*button*/}
                            <div className="flex justify-around mt-4">
                                <button type="submit"className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200">
                                    Signup
                                </button>
                                <div className="text-xl">
                                    Have account?{" "}
                                    <button
                                        className="underline text-blue-500 cursor-pointer"
                                        onClick={() =>
                                            document.getElementById("my_modal_3").showModal()
                                        }
                                    >
                                        Login
                                    </button>{" "}
                                    <div>
                                        <Login />
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;
