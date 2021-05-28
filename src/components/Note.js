import React,{useState} from "react";
import axios from 'axios';


const Note = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    
    console.log(title,"--------",body);

    const submitHandler = async()=>{
        await axios.post('http://localhost:4000/',{
            title,
            body,
        })

        setTitle("")
        setBody("")
        window.location.reload();
    }
    
  
  return (
    <>
      <div
        className="card"
        style={{ margin: "auto", width: "70%", padding: "10px" }}
      >
        <div className="card-header">Enter your Note.</div>
        <div
          className="card-body"
          style={{ margin: "auto", width: "70%", padding: "10px" }}
        >
          <div
            className="input-group flex-nowrap"
            style={{ margin: "auto", width: "70%", padding: "10px" }}
          >

            <input
              onChange={(e)=>{setTitle(e.target.value)}}
              type="text"
              className="form-control"
              placeholder="Enter the  title of your note"
              value= {title}
              aria-describedby="addon-wrapping"
            />
          </div>
          <div
            className="input-group"
            style={{ margin: "auto", width: "70%", padding: "10px" }}
          >
            <span className="input-group-text">Body</span>
            <textarea 
            onChange={(e)=>{setBody(e.target.value)}}
            className="form-control"
            value= {body} 
            aria-label="Body"
            >

            </textarea>
            <br />
            
          </div>

          <button
            onClick ={()=>{submitHandler()}}
            type="button"
            class="btn btn-dark"
            style={{ marginLeft:"75%" }}
          >
            Dark
          </button>
          
        </div>
      </div>
    </>
  );
};

export default Note;
