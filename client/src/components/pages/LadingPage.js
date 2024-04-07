import { Link, Navigate } from "react-router-dom";
import Card from "../UI/Card";
import blogmain from '../../images/heroblog.jpg'
import { useContext } from "react";
import { UserContext } from "../../store/user-context";

export default function LadingPage() {
    const { userInfo, setUserInfo } = useContext(UserContext);
    if (userInfo?.id) {
        return <Navigate to={'/home'} />
    }
    return (
        <>
            {!userInfo?.id && (
                <div>
                    <div className='h-[100vh] flex justify-center items-center px-4 overflow-hidden'>
                        <div className="absolute overflow-hidden -z-50 opacity-90">
                            <img src={blogmain} alt="heroimage" className="aspect-video"/>
                        </div>
                        <div className="bg-color2 p-4 bg-opacity-25 rounded-lg">
                            <h1 className="md:text-6xl text-4xl font-bold text-color4">Unleash Your Creativity with Traverllify</h1>
                            <h3 className='mt-4 md:text-4xl text-2xl text-gray-300 text-color4'>Traverllify - Where Your Words Come to Life</h3>
                            <Link to='/home' className="text-2xl mt-8 md:mx-auto relative border hover:border-color1 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-pink-800 p-2 flex justify-center items-center font-extrabold bg-color4">
                                <p className="text-color2 hover:opacity-80">Discover More</p>
                            </Link>
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-2 gap-4 md:p-48 px-4 py-8 bg-color1">
                        <div className="">
                            <h1 className="md:text-6xl text-2xl leading-5 text-color2">Welcome to Travellify</h1>
                            <Link to='/register' className="text-2xl mt-8 mb-8 relative border hover:border-pink-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-pink-800 p-2 flex justify-center items-center font-extrabold hover:bg-color4 hover:text-color1">
                                <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-pink-900 delay-150 group-hover:delay-75"></div>
                                <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-pink-800 delay-150 group-hover:delay-100"></div>
                                <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-pink-700 delay-150 group-hover:delay-150"></div>
                                <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-pink-600 delay-150 group-hover:delay-200"></div>
                                <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-pink-500 delay-150 group-hover:delay-300"></div>
                                <p className="z-10 text-color2">Share Your Blogs</p>
                            </Link>
                        </div>
                        <div>
                            <p className="md:text-2xl text-xl text-color2">Dive into our travel blogs and let the adventures begin. <br /> Discover new places, get insider tips, and start planning your next unforgettable trip today! </p>
                        </div>
                    </div>
                    <div className="flex justify-center flex-wrap gap-12 md:p-48 p-12">
                        <Card
                            title="Post Your Blogs"
                            description="Share your thoughts, stories, and ideas with the world in just a few clicks."
                            btnText="Find Out More"
                            link="/register"
                        />
                        <Card
                            title="Read New Blogs"
                            description="Discover fresh content from talented writers across various genres and topics."
                            btnText="Read"
                            link="/home"
                        />
                        <Card
                            title="Connect with Creatives"
                            description="Engage with like-minded individuals, exchange feedback, and build a community of passionate bloggers."
                            btnText="Connect"
                            link="/register"
                        />
                    </div>
                    <div className="backgroundImg">
                        <div className="md:p-80 p-12 text-center bg-[#000000a1]">
                            <h1 className="md:text-8xl text-2xl mb-8 text-color2">Let Your Voice Be Heard - Start Blogging Today!</h1>
                            <p className="md:text-4xl text-xl text-color2">Discover new places, get insider tips, and start planning your next unforgettable trip today! </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="md:p-12 md:text-2xl p-3 text-center">By <a href="https://www.linkedin.com/in/hinguyash/" target="_blank" className="text-pink-900 font-bold underline">Hack Coder</a>
                        </h2>
                    </div>
                </div>
            )}
        </>
    )
}