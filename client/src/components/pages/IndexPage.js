import { useContext, useEffect, useState } from "react";
import Post from "../Post";
import { API_PORT } from "../../util/path";
import UserProgressContext from "../../store/UserProgressContext";
import Loader from "../UI/Loader";
import Posts from "../UI/Posts";

export default function IndexPage() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(`${API_PORT}post`).then(response => {
            response.json().then(posts => {
                setPosts(posts);
            })
        })
        document.title = "Travellify"
    }, [])
    return (<>
        <div className="">
            {posts.length === 0 && (<div className="flex "><Loader height='150px' /><Loader height='150px' /><Loader height='150px' /><Loader height='150px' /></div>)}
            {posts.length > 0 && <Posts posts={posts}/>}
        </div>
    </>)
}