import React, { useEffect, useState } from 'react'
import Footer from './Home/Footer'
import { Link } from 'react-router-dom'
import img from '../img/RSAPOC.jpg'

const Contact = () => {
 

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//js.hsforms.net/forms/embed/v2.js';
        script.charset = 'utf-8';
        script.type = 'text/javascript';
        document.body.appendChild(script);

        script.onload = () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region: "na1",
                    portalId: "22582640",
                    formId: "8d414a3c-6fea-4102-b8e0-f1f82633ff6e",
                    target: '#hubspotForm' // Specify the target element where the form will be rendered
                });
            }
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (window.hbspt) {
            window.hbspt.forms.submit({
                portalId: "22582640",
                formId: "e8d0a2af-d0dc-4ee5-97e2-10409128dce5",
                fields: {
                    // Map your form fields to HubSpot fields
                    'firstname': e.target.name.value,
                    'email': e.target.email.value,
                    'message': e.target.message.value
                }
            });
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className='container mx-auto relative  bg-transparent '>
                <Link to="/" class="flex items-center absolute top-16 left-4 z-50 bg-slate-700 p-1 rounded-full pr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className='text-[#a0ff00] hover:underline pr-1'>Go Back</span>
                </Link>
                <section className=" ">
                    <div className="container px-6 py-12 mx-auto">
                        <div className="text-center ">
                            <p className="font-medium  text-[#a0ff00]">Contact us</p>
                            <h1 className="mt-2 text-2xl font-semibold  md:text-3xl text-white">We’d love to hear from you</h1>
                            <p className="mt-3 text-gray-400"></p>
                        </div>
                        <img className="object-cover w-full md:h-64  h-auto mt-10 rounded-lg  picbox1" src= {img} alt="" />
                    </div>
                </section>

                <section className="text-gray-900 body-font relative">
                    <div className="container px-5 py-4 mx-auto">
                        <div className="lg:w-1/2 md:w-2/3 mx-auto bg-gray-900 p-10 rounded-2xl picbox1">
                            <form onSubmit={handleSubmit}>
                                <div id="hubspotForm">
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                <div className=' px-28 rounded pb-10'>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Contact