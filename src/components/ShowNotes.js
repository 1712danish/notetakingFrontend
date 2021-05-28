import React, { useEffect, useState } from "react";
import {Link}  from 'react-router-dom'

import axios from "axios";

const ShowNotes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(async () => {
    const data = await axios.get("http://localhost:4000");
    console.log(data);
    setNotes(data.data);
  }, []);

  const deleteNote = async(id)=>{

    await axios.delete("http://localhost:5000/delete",{
      id:id
    })

  }

  console.log("------notes Value====", notes);

  return (
    <>
      <div className="container" style={{ margin: "20px" }}>
        <div className="row row-cols-4">  
            {notes.map((data) => {
              return (
                <>
                <div className="col">
                  <div class="card" >
                    <div className="card-body">
                      <h5 className="card-title">{data.title }</h5>
                      <p className="card-text">{data.body}</p>
                      <button 
                      onClick = {()=>{
                        deleteNote(data._id)
                      }}
                      type="button" 
                      class="btn btn-dark"
                      >
                        Delete
                      </button>

                      <Link to={`/note/${data._id}`} > view more</Link>

                    </div>
                  </div>
                  </div>
                </>
              );
            })}
          </div>    
      </div>
    </>
  );
};

export default ShowNotes;
