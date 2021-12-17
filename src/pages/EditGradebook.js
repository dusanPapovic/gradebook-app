import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams  } from "react-router";
import { useEffect } from "react";
import { createStudent, selectGradebook,deleteStudent } from "../store/gradebooks";

export default function EditGradebook() {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
const gradebook= useSelector(selectGradebook);
 
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

  const deleteStudents = (student_id) => {
 dispatch(
      deleteStudent({
        id: student_id,
        onSuccess: () => {
           history.goBack();
        },
      })
    );

  };

useEffect(() => {
    
  }, []);

  return (
    <div>
        <h1>Edit Gradebook</h1>
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

<h3>Students list</h3>
<ul>
          {gradebook.students.map((student) => (
          <li key={student.id}>
             <div>{student.first_name} {student.last_name} <button onClick={()=>deleteStudents(student.id)}>Delete student</button></div>
              </li>
        ))}
</ul>
    </div>
  );
}