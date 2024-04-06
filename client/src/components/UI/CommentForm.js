import React, { useState, useContext } from 'react';
import { UserContext } from "../../store/user-context";
import { Link } from 'react-router-dom';

const CommentForm = ({ handleComment }) => {
    const [comment, setComment] = useState('');
    const { userInfo } = useContext(UserContext);
    const userID = userInfo?.id;

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the form submission logic here
        handleComment(comment);
        setComment('');
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-comment">
                        Comment
                    </label>
                </div>
                <div className="md:w-2/3">
                    <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-comment" type="text" value={comment} onChange={(e) => setComment(e.target.value)} required/>
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                    {userID && <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Comment
                    </button>}
                    {!userID && <Link className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded no-underline" to="/login">
                        Comment
                    </Link>}
                </div>
            </div>
        </form>
    );
};

export default CommentForm;
