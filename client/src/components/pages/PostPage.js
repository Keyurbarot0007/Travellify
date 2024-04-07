import { useState, useEffect, useContext } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { UserContext } from "../../store/user-context";
import { API_PORT, CLIENT_URL, SHARE_URL } from "../../util/path";
import MarkdownEditor from '@uiw/react-markdown-editor';

import CommentForm from "../UI/CommentForm";
import ShareButtons from "../UI/ShareButtons";

export default function PostPage() {
    const [postInfo, setPostInfo] = useState(null);
    const [comments,setComments] = useState(null);
    //userInfo : who are logged In
    const { userInfo } = useContext(UserContext);
    const { id } = useParams();
    const [redirect, setRedirect] = useState(false);
    // const [like,setLike] = useState(false);
    const userID = userInfo?.id;

    useEffect(() => {
        fetch(`${API_PORT}post/${id}`).then(response => {
            response.json().then(postInfo => {
                setPostInfo(postInfo);
                const newComments = [...postInfo.comments]
                setComments(newComments);
                document.title = postInfo.title;
            })
        })
    }, [])

    console.log(postInfo);

    // async function handleLike(){
    //     if(!like){
    //         setLike(true);
    //         const postid = postInfo._id;
    //         const response = await fetch(`${API_PORT}like`, {
    //             method: 'POST',
    //             body: JSON.stringify({ postid,like }),
    //             headers: { 'Content-Type': 'application/json' },
    //             credentials: 'include',
    //         });
    //     }
    // }    

    async function handleDelete() {
        const response = await fetch(`${API_PORT}delete/${id}`, {
            method: 'DELETE',
            credentials: 'include',
        })
        if (response.ok) {
            response.json().then(msg => console.log(msg))
            setRedirect(true);
        }
    }

    async function handleComment(comment) {
        const postid = postInfo._id;
        const response = await fetch(`${API_PORT}comment`, {
            method: 'POST',
            body: JSON.stringify({ comment, postid }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });

        if (response.ok) {
            response.json().then(data => {
                setComments(data.postDoc.comments);
                console.log(data.postDoc.comments);
            })
        } else {
            console.error('Error submitting comment');
        }
    }


    if (!postInfo) return '';
    if (redirect) {
        return <Navigate to={'/user/' + userID} />
    }

    return <div className="post-page p-4">
        <h1 className="text-4xl font-bold">{postInfo.title}</h1>
        <Link
            to={`/user/${postInfo.author['_id']}`}
            className="author"
        >by {postInfo?.author['userName']}
        </Link>
        <time>{new Date(postInfo.createdAt).toUTCString()}</time>
        {userID === postInfo.author['_id'] && (
            <div className="edit_container">
                <Link to={`/edit/${postInfo._id}`} className="edit_btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>

                    Edit This Post</Link>
                <button className="cancel_btn" onClick={handleDelete}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24"><path fill="#fa0055" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z" /></svg>
                    Delete this post</button>
            </div>
        )}
        <div className="image">
            <img src={`${postInfo.cover}`} alt="" className="aspect-video rounded-3xl" />
        </div>

        <MarkdownEditor.Markdown source={postInfo.content} height="200px" />
{/* 
        <button onClick={handleLike}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
            </svg>
            {postInfo?.likes.length === 0?"":postInfo?.likes.length} 
        </button> */}
        <CommentForm handleComment={handleComment} />

        <div className="mt-8">
            {comments?.map(comment =>
                <>
                    <div key={comment._id} className="p-4 border rounded shadow">
                        <h3 className="text-lg font-semibold">{comment?.user.userName}</h3>
                        <img src={comment.user.profile} alt={comment?.user.userName} className="w-10 h-10 rounded-full" />
                        <p className="text-gray-700">{comment.text}</p>
                        <p className="text-sm text-gray-500">{new Date(comment.date).toLocaleString()}</p>
                    </div>
                </>
            )}
        </div>
        <ShareButtons post={postInfo} />
    </div>
}  