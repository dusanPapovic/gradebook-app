import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams  } from "react-router";
import { useEffect } from "react";
import { createStudent } from "../store/gradebooks";

export default function CreateStudent() {
  const history = useHistory();
const { id } = useParams();
  const dispatch = useDispatch();

 
  const [studentData, setStudentData] = useState({
    first_name: "",
    last_name: "",
    image_url: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(
      createStudent({
        gradebook_id:id,
        student:studentData,
        onSuccess: () => {
          history.goBack();
        },
      })
    );
  }

useEffect(() => {
    
  }, []);

  return (
    <div className="container">
        <h1>Create Student</h1>
      <form >
         <div className="form-group">
    <label htmlFor="firstName">First name</label>
          <input
            required
            className="form-control" 
            id="firstName"
            placeholder="First name"
            value={studentData.first_name}
            onChange={({ target }) =>
              setStudentData({ ...studentData, first_name: target.value })
            }
          />
        </div>
          <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <input
            required
            className="form-control" 
            id="lastName"
            placeholder="Last name"
            value={studentData.last_name}
            onChange={({ target }) =>
              setStudentData({ ...studentData, last_name: target.value })
            }
          />
        </div>
         <div className="form-group">
         <label htmlFor="imageUrl">Image url</label>
          <input
            required
            className="form-control" 
            id="imageUrl"
            placeholder="Image url"
            value={studentData.image_url}
            onChange={({ target }) =>
              setStudentData({ ...studentData, image_url: target.value })
            }
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSubmit} >Submit</button>
      </form>
    </div>
  );
}