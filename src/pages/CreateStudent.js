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
    <div>
        <h1>Create Student</h1>
      <form >
        <div>
          <input
            required
            placeholder="First name"
            value={studentData.first_name}
            onChange={({ target }) =>
              setStudentData({ ...studentData, first_name: target.value })
            }
          />
        </div>
         <div>
          <input
            required
            placeholder="Last name"
            value={studentData.last_name}
            onChange={({ target }) =>
              setStudentData({ ...studentData, last_name: target.value })
            }
          />
        </div>
         <div>
          <input
            required
            placeholder="Image url"
            value={studentData.image_url}
            onChange={({ target }) =>
              setStudentData({ ...studentData, image_url: target.value })
            }
          />
        </div>
        <button onClick={handleSubmit} >Submit</button>
      </form>
    </div>
  );
}