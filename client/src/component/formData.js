import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./formData.css"

const FormData=()=>{
    const [postdata, setpostdata]=useState({});
    const formpostdata=[{attr:"image", type:"text", id:"image"},
                        {attr:"author", type:"text", id:"author"},
                        {attr:"description", type:"text", id:"description"},
                        {attr:"location", type:"text", id:"location"}]

    const handleonclick=()=>{
        console.log(postdata);
        axios({
            url:" https://instaclone-01-node.herokuapp.com/post/add",
            method:"POST",
            data:postdata
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    const handleInputChange=(e,id)=>{
        setpostdata({...postdata, [id]:e.target.value})
    }
    
    return(
        <>
        <div id="main">
            <form>
                {formpostdata.map((formkey)=>{
                    return(
                        <div>
                            <input required={true} placeholder={formkey.id} type={formkey.type} id={formkey.id} onChange={(e)=>{handleInputChange(e,formkey.id)}}></input>
                        </div>
                    )
                })}
            </form>
            <Link to="/" id="button_link" onClick={handleonclick} type="submit">POST</Link>
        </div>
        
        </>
    )
}
export default FormData;