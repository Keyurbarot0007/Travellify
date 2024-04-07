import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../store/user-context";
import { API_PORT } from "../util/path";

export default function Header() {
    const { userInfo, setUserInfo } = useContext(UserContext);
    const isMobile = (Number(window.innerWidth) <= 768);
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        fetch(`${API_PORT}profile`, {
            method: "GET",
            credentials: "include",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            })
        })
    }, []);

    function handleLogout() {
        fetch(`${API_PORT}logout`, {
            credentials: 'include',
            method: 'POST',
        })
        setUserInfo(null);
    }
    const userName = userInfo?.userName;
    const userId = userInfo?.id;
    const userProfile = userInfo?.profile;

    function handleToggle(ev, state) {
        ev.preventDefault();
        setToggle(state);
    }
    if (isMobile) {
        return (
            <>
                <header>
                    <Link to="/home" className="logo text-white">
                        Traverllify
                    </Link>
                    <nav onClick={(ev) => handleToggle(ev, true)} className="flex flex-row gap-2">
                        {userName &&
                            <Link to={`/user/${userId}`} className="user_profile">
                                <img src={userProfile} alt="user" />
                            </Link>
                        }
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </nav>
                </header>
                {toggle &&
                    <div className="fixed top-0 right-0 z-20 bg-black w-full h-full">
                        {userName && (
                            <div className="flex flex-col mt-52 gap-8 items-center h-full">
                                <button className="fixed top-4 right-4" onClick={(ev) => handleToggle(ev, false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <button onClick={(ev) => handleToggle(ev, false)} className="flex flex-col gap-4 items-center">
                                    <Link to="/create" className="create_post_btn">Create New Post</Link>
                                    <a onClick={handleLogout}>Logout</a>
                                </button>
                            </div>
                        )}
                        {!userName && (
                            <div className="flex flex-col mt-52 gap-8 items-center h-full">
                                <button className="fixed top-4 right-4" onClick={(ev) => handleToggle(ev, false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <button onClick={(ev) => handleToggle(ev, false)} className="flex flex-col gap-4 items-center">
                                    <Link
                                        to="/login"
                                        className="text-blue-600 font-bold text-xl"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="text-pink-600 font-bold text-xl"
                                    >
                                        Register
                                    </Link>
                                </button>
                            </div>
                        )}
                    </div >
                }
            </>)
    }
    return <header>
        <Link to="/home" className="logo text-color2">
            Travellify
        </Link>
        <nav>
            {userName && (
                <>
                    <Link to="/create" className="create_post_btn">Create New Post</Link>
                    <a onClick={handleLogout}>Logout</a>
                    <Link to={`/user/${userId}`} className="user_profile">
                        <p>hello ,{userName}</p>
                        <img src={userProfile} alt="user" />
                    </Link>
                </>
            )}
            {!userName && (
                <>
                    <Link
                        to="/login"
                        className="bg-color1 hover:opacity-80"
                    >
                        <div
                            className="px-6 py-2 backdrop-blur-xl bg-black/80 rounded-xl font-bold w-full h-full"
                        >
                            <div
                                className="group-hover:scale-100 flex group-hover:text-pink-500 text-pink-600 gap-1 inline"
                            >
                                Login
                            </div>
                        </div>
                    </Link>
                    <Link
                        to="/register"
                        className="text-color3 hover:op"
                    >
                        <div
                            className="px-6 py-2 backdrop-blur-xl bg-black/80 rounded-xl font-bold w-full h-full"
                        >
                            <div
                                className="group-hover:scale-100 flex group-hover:text-sky-500 text-sky-600 gap-1 inline"
                            >
                                Register
                            </div>
                        </div>
                    </Link>
                </>
            )}
        </nav>
    </header>
}