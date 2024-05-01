import React, { useState, useEffect, useRef } from 'react';
import orbmp4 from "../../img/orb/orb.mp4";
import BotLogo from '../../img/logogreen.png';
import UserLogo from '../../img/user1.jpg';
import toast, { Toaster } from 'react-hot-toast'
import Confetti from 'react-confetti';
import { Api } from '../../Api/Api';
import Orb from '../../img/orb.gif';

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [loading, setloading] = useState(false)
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isOrbHover, setIsOrbHover] = useState(false)

    const toggleChatWindow = () => {
        setIsOrbHover(false)
        setIsOpen(!isOpen);
    };

    const handleOrbHover = () => {
        if (isOpen == false) {
            setIsOrbHover(true);
        }
        else { }
    };

    const handleOrbHoverOut = () => {
        setIsOrbHover(false);
    };

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
            <div className="fixed -bottom-3 -right-3">

                <button className=" text-white rounded-full p-2  shadow-md focus:outline-none" onClick={toggleChatWindow} onMouseEnter={handleOrbHover} onMouseLeave={handleOrbHoverOut} >  <video autoPlay muted loop className={`h-24 w-24 ${isOrbHover ? 'hovered' : ''}`} > <source src={orbmp4} type="video/mp4" /> </video> </button>

                {isOpen && (
                    <div className=" chatbot-window fi xed bottom-[90px] right-4 lg:w-96 lg:h-[480px] md:w-96 md:h-[480px] bg-black picboxc   rounded-2xl   " >
                        <div className="flex justify-between items-center px-4 py-2   ">
                            <div className="relative flex items-center space-x-3">
                                <div className="relative"> <span className="absolute  "> <svg width={20} height={20}>   </svg> </span> <img src={BotLogo} alt="" className="w-auto sm:w-auo h-10 sm:h-16 rounded-full border border-[#a0ff00]" /> </div>
                                <div className="flex flex-col leading-tight"> <div className="text-3xl mb-2 flex items-center"><span className="text-white  mr-3 text-lg " style={{ fontSize: '25px' }}><b>HACKERverse®</b></span> </div> <span className="text-lg text-gray-600" style={{ fontSize: '15px' }}><i>  </i></span> </div>
                            </div>
                            <button className="text-[#a0ff00] hover:text-green-600 focus:outline-none" onClick={toggleChatWindow} > <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> </svg> </button>
                        </div>
                        <div className="">
                            <div className="flex-1 p:2 sm:p-2 justify-between flex flex-col h-[400px] bg-black rounded-2xl">
                                <div id="messages" className="flex flex-col -mt-1 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch h-full bg-[#323232] rounded-md     custom-scrollbar">
                                    <div  className={`chat-message mb-3 `}>
                                        <div  className={`  flex items-end`}>
                                            <div className={`flex flex-col space-y-2 text-md max-w-xs mx-2 order-2 items-start`}>
                                                <div>
                                                    <span className={`px-4 py-2 rounded-lg inline-block  rounded-bl-none bg-gray-300 text-gray-900  `}>
                                                        Hey WhatsApp! How may I help you.
                                                    </span>
                                                </div>
                                            </div>
                                            <img src= {BotLogo} alt="Profile" className={`w-12 h-12 rounded-full order-1 `} />
                                        </div>
                                    </div>

                                    {messages.map((message, index) => (
                                        <div key={index} className={`chat-message mb-3 `}>
                                            <div key={index} className={`  ${message.type === 'user' ? 'flex items-end justify-end' : 'flex items-end'}`}>
                                                <div className={`flex flex-col space-y-2 text-md max-w-xs mx-2 order-${message.type === 'user' ? '1' : '2'} items-${message.type === 'user' ? 'end' : 'start'}`}>
                                                    <div>
                                                        <span className={`px-4 py-2 rounded-lg inline-block ${message.type === 'user' ? 'rounded-br-none bg-[#54721e] text-white ' : 'rounded-bl-none bg-gray-300 text-gray-900  '}`}>
                                                            {message.text}
                                                        </span>
                                                    </div>
                                                </div>
                                                <img src={message.type === 'user' ? UserLogo : BotLogo} alt="Profile" className={`w-12 h-12 rounded-full order-1 `} />
                                            </div>
                                        </div>
                                    ))}
                                    <div ref={messagesEndRef} />
                                </div>
                                <div className="  border-gray-200 px-1 pr-3 pt-2 mb-2 sm:mb-0 pb-2">
                                    <div className="relative flex">
                                        <input type="text" placeholder="Write your message!"
                                            ref={inputRef}
                                            value={inputValue}
                                            onChange={handleChange}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' && loading == false) {
                                                    handleSubmit(e);
                                                }
                                            }}
                                            className="ml-1 w-full focus:outline-none focus:placeholder-gray-400 font-medium text-gray-900 placeholder-gray-600 pl-3 bg-gray-200 rounded-md py-2" />
                                        <div className="absolute -right-1 items-center inset-y-0 hidden sm:flex">
                                            <button disabled={loading} type="button" onClick={handleSubmit} className="inline-flex items-center justify-center rounded-r-md  -md px-2 py-2 transition duration-500 ease-in-out text-white bg-[#1f7920] hover:bg-green-900 focus:outline-none" > <span className="font-bold"></span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90" > <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /> </svg> </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {isOrbHover && (
                    <div className="fixed bottom-[90px] right-2 w-80 h-[80px] bg-black  picboxc   rounded-2xl ">
                        <div className="flex justify-between items-center px-4 py-2   ">
                            <div className="relative flex items-center space-x-3">
                                <div className="relative"> <span className="absolute  "> <svg width={20} height={20}>   </svg> </span> <img src={BotLogo} alt="" className="w-auto sm:w-auo h-10 sm:h-16 rounded-full border border-[#a0ff00]" /> </div>
                                <div className="flex flex-col leading-tight"> <div className="text-3xl mb-2 flex items-center"><span className="text-white   text-lg " style={{ fontSize: '20px' }}><b>Hey, Chat with me!</b></span> </div> <span className="text-lg text-gray-600" style={{ fontSize: '15px' }}><i>  </i></span> </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </>
    )
}

export default ChatBot