import React, { useEffect, useState } from "react";
import { Link ,useParams,useHistory} from "react-router-dom";

import axios from "axios";

const NoteDetails = () => {
  const [notes, setNotes] = useState([]);
  const history = useHistory()
  const {id} = useParams()
  console.log("param id",id)
  useEffect(async()=>{
      const data = await axios.get(`http://localhost:4000/note/${id}`)

      setNotes(data.data)

  },[])

  const deleteHandler  = async()=>{
    await axios.delete(`http://localhost:4000/delete/${id}`)
  }



  console.log("------notes Value====", notes);

  return (
    <>
      <div className="container" style={{ margin: "20px" }}>
        <div className="row row-cols-4">
          <>
            <div className="col">
              <div class="card">
                <div className="card-body">
                  <h5 className="card-title">{notes.title}</h5>
                  <p className="card-text">{notes.body}</p>
                  <button onClick={() => {deleteHandler()
                  history.push('/note')
                  
                  }} type="button" class="btn btn-dark">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default NoteDetails;
