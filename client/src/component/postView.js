import Instalogo from "../assets/instalogo.png";
import Camera from "../assets/camera.png";
import likes from "../assets/likes.png";
import rocket from "../assets/rocket.png"
import { Link } from "react-router-dom";
import axios from "axios";
import './post-view.css';

import { useState, useEffect} from "react";

const PostView=()=>{
    const [post, setpost] = useState([]);
    useEffect(()=> {
        axios({
            method: "GET",
            url: " https://instaclone-01-node.herokuapp.com/post/add"
        }).then((res)=> {
            console.log(res);
            setpost(res.data.sort())
        }).catch((err)=> {
            console.log(err)
        })
    }, [])
    return(
        <>
        <div>
            <div className="navbar">
            <span className="nav"><img src={Instalogo}  alt="instagram" /></span>
            <span className="nav1"><Link to="/formdata"><img src={Camera} alt="nikon"/></Link></span>
            </div>
            <div>
            <ul>
            {
                            post.map((user, i)=>{
                                    return (
                                        <>
                                        <div key={i} className='main' >
                                            <div className="user-information">
                                             <span className="name-location">
                                                 <div><strong>{user.author}</strong></div>
                                                 <div>{user.location}</div>
                                                    <br/>
                                             </span>
                                             <span className="threedot"><strong>...</strong></span>
                                            </div>
                                            <div className="user-image">
                                                <img id="img" src={user.image} alt="hi"></img>
                                            </div>
                                        
                                             <div className="user-description">
                                                 <h3>{user.description}</h3> 
                                            </div>
                                            <div>
                                                <img id="likes" src={likes} alt="likes"/>
                                                <img id="rocket" src={rocket} alt="rocket"></img>
                                            </div>
                                        </div>
                                        </>
                                    )
                            })
                        }
            </ul>
       </div>
       </div>
        </>
    )
}

export default PostView;