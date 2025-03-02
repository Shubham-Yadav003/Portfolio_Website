import React from 'react'
import { ReactTyped } from "react-typed";

import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";


function Home() {
    return (
        <>
            <div  name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='text-xl'> Welcome In My Feed  </span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1> Hello I'm a</h1>
                            {/* <span className='text-red-700 font-bold'>Developer</span> */}
                            <ReactTyped
                                className="text-red-700 font-bold"
                                strings={["Developer", "Programmer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className='text-sm md:text-md  text-justify'> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Quisquam, recusandae className=''consequatur. Accusamus sint libero eligendi
                            laborum fuga repudiandae? Asperiores tempore eos animi dolores
                            corrupti! Sint quos, mollitia architecto aliquam nesciunt, optio
                            cum delectus sit voluptatum aut ratione quaerat veniam aperiam!</p>
                        <br />
                        {/* social media icon*/}
                        <div className='flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center'>
                            <div className='space-y-2 '>
                                <h1 className='font-bold '>Available On</h1>
                                <ul className='flex space-x-5 '>


                                    <li>
                                        <a href='https://www.instagram.com/shubhamyadav__03/'
                                            target="_blank">
                                            <FaInstagram className='text-2xl cursor-pointer' />
                                        </a>


                                    </li>

                                    <li>
                                        <a href='https://www.linkedin.com/in/shubhamyadav007/'
                                            target="_blank">


                                            <FaLinkedin className='text-2xl cursor-pointer' />
                                        </a>

                                    </li>

                                    <li>
                                        <a href='https://github.com/Shubham-Yadav003'
                                            target="_blank">

                                            <FaGithub className='text-2xl cursor-pointer' />
                                        </a>

                                    </li>

                                    <li>
                                        <a href='https://www.facebook.com'
                                            target="_blank">

                                            <FaFacebook className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>

                                </ul>
                            </div>

                            <div className='space-y-2'>
                                <h1 className='font-bold'>Currently Working On</h1>
                                <div className='flex space-x-5 '>
                                    <SiMongodb className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer' />
                                    <SiExpress className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer' />
                                    <FaReact className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer' />
                                    <FaNodeJs className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer' />




                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>

                    <div className='md:w-1/2 md:mt-20 md:ml-48 order-1 mt-8'>
                        <img src="/photo.avif" className='rounded-full md:w-[450px] h-[450px]' alt='' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
