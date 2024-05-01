import React, { useState, useEffect, useRef } from 'react';
import Loader from '../img/Circle-Loading-ORB-gif.gif';
import BotLogo from '../img/logogreen.png';
import UserLogo from '../img/user1.jpg';
import toast, { Toaster } from 'react-hot-toast'
import Confetti from 'react-confetti';
import { Api } from '../Api/Api';

const Home = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [loading, setloading] = useState(false)
    const [showConfetti, setShowConfetti] = useState(false); // State to control confetti visibility
    const [Blur, setBlur] = useState(false)
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const sendMessage = async (message) => {
        const response = await fetch(`${Api}/query`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: message }),
        });

        const data = await response.json();
        return data;
    };

    const handleSubmit = async (event) => {
        if (inputValue == '' || inputValue == null) { toast.error('Please Enter your Message.'); return }

        setloading(true)
        event.preventDefault();
        setMessages([
            ...messages,
            { type: 'user', text: inputValue },
            { type: 'bot', text: '...' },
        ]);
        setInputValue(''); // Clear the input field after submission

        const botResponse = await sendMessage(inputValue);

        setMessages([
            ...messages,
            { type: 'user', text: inputValue },
            { type: 'bot', text: botResponse },
        ]);
        if (botResponse.includes('CONGRULATIONS!')) {
            setShowConfetti(true);
            // Hide confetti after 5 seconds
            setTimeout(() => {
                setShowConfetti(false);
            }, 10000);
        setloading(false)
        toast.custom((t) => (
            <div
                className={`${t.visible ? 'animate-enter' : 'animate-leave'
                    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
                <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 pt-0.5">
                            <img
                                className="h-10 w-10 rounded-full"
                                src={BotLogo}
                                alt=""
                            />
                        </div>
                        <div className="ml-3 flex-1">
                            <p className="text-sm font-medium text-gray-900">
                                HACKERverse®
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                Your POC will come to your Email!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex border-l border-gray-200">
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-green-600 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        Close
                    </button>
                </div>
            </div>
        ))
    }
    setloading(false)

    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <>
            <section className="h-screen flex justify-center items-center  ">

                <div className={`container px-4 py-7 mx-auto flex flex-col md:flex-row items-center space-y-4 md:space-y-0  `}>
                    <div className="hidden md:block p-4 md:w-[25%] lg:w-[25%]  sidelogo">
                        <img src={Loader} className='h-[260px] w-auto' />
                    </div>
                    <div className="p-4 md:w-[50%] lg:w-[50%] w-[100%] bg-black -300  rounded-3xl picboxc">
                        <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-[544px]">
                            <div className="fle x sm:items-center justify-between py-3   ">
                                <div className="relative flex items-center space-x-4">
                                    <div className="relative"> <span className="absolute  "> <svg width={20} height={20}>   </svg> </span> <img src={BotLogo} alt="" className="w-10 sm:w-16 h-10 sm:h-16 rounded-full border border-[#a0ff00]" /> </div>
                                    <div 
                                    className="flex flex-col leading-tight"> <div className="text-3xl mt-1 flex items-center"><span className="text-white  mr-3 text-lg" style={{ fontSize: '30px' }}><b>POCBOT</b></span> </div> <span className="text-lg text-gray-600" style={{ fontSize: '15px' }}><i>HACKERverse® copyright© trademark™ </i></span> </div>
                                </div>
                                <div className="flex items-ce nter space-x-2">{/* topheader */}</div>
                            </div>

                            <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch h-full bg-[#323232] rounded-md mt-1 shadow-indigo-950 custom-scrollbar">
                                <div className="chat-message">
                                    <div className="flex items-end">

                                        <div className="flex flex-col space-y-2 text-lg max-w-xs mx-2 order-2 items-start">
                                            <div>
                                                <span className="px-4 py-2 rounded-lg inline-block  rounded-bl-none bg-gray-300 text-gray-600  font-normal">  Welcome to the HACKERverse® type "Hi" to begin! </span> </div> </div>
                                        <img src={BotLogo} alt="My profile" className="w-12 h-12 rounded-full order-1" />
                                    </div>

                                </div>
                                {messages.map((message, index) => (
                                    <div key={index} className={`chat-message  `}>
                                        <div key={index} className={`  ${message.type === 'user' ? 'flex items-end justify-end' : 'flex items-end'}`}>
                                            <div className={`flex flex-col space-y-2 text-lg max-w-xs mx-2 order-${message.type === 'user' ? '1' : '2'} items-${message.type === 'user' ? 'end' : 'start'}`}>
                                                <div>
                                                    <span className={`px-4 py-2 rounded-lg inline-block ${message.type === 'user' ? 'rounded-br-none bg-[#54721e] text-white font-normal' : 'rounded-bl-none bg-gray-300 text-gray-600  font-normal'}`}>
                                                        {message.text}
                                                    </span>
                                                </div>
                                            </div>
                                            <img src={message.type === 'user' ? UserLogo : BotLogo} alt="Profile" className={`w-12 h-12 rounded-full order-1`} />
                                        </div>
                                    </div>
                                ))}
                                <div ref={messagesEndRef} />
                            </div>
                            <div className="  border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
                                <div className="relative flex">
                                    {/* <span className="absolute inset-y-0 flex items-center"> <button type="button" className="inline-flex items-center justify-center rounded-full h-11 w-11 transition duration-500 ease-in-out   hover:bg-gray-500 hover:text-white focus:outline-none ml-1" > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /> </svg> </button> </span> */}
                                    <input type="text" placeholder="Write your message!"
                                        ref={inputRef}
                                        value={inputValue}
                                        onChange={handleChange}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' && loading == false) {
                                                handleSubmit(e);
                                            }
                                        }}
                                        className="ml-1 w-full focus:outline-none focus:placeholder-gray-400 font-medium text-gray-900 placeholder-gray-600 pl-3 bg-gray-200 rounded-2xl py-3" />
                                    <div className="absolute -right-1 items-center inset-y-0 hidden sm:flex">
                                        <button disabled={loading} type="button" onClick={handleSubmit} className="inline-flex items-center justify-center rounded-r-2xl  -md px-2 py-3 transition duration-500 ease-in-out text-white bg-[#1f7920] hover:bg-green-900 focus:outline-none" > <span className="font-bold"></span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90" > <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /> </svg> </button>
                                    </div>
                                </div>
                            </div>
                            {showConfetti && <Confetti />}

                        </div>
                    </div>
                    <div className="hidden md:block p-4 md:w-[25%] lg:w-[25%] sidelogo ">
                        <img src={Loader} className='h-[260px] w-auto' />
                    </div>
                </div>

                <Toaster />
            </section>
        </>
    )
}

export default Home;
