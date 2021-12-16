import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getGradebook, selectGradebook } from "../store/gradebooks";

export default function Movie() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const gradebook= useSelector(selectGradebook);
console.log(gradebook);
  useEffect(() => {
    dispatch(getGradebook(id));
  }, [id]);

  if (!gradebook) {
    return null;
  }
  return (
    <div>
      <button>Add New Students</button>
          <p>Name: {gradebook.name}</p>   
          <p>Profesor: {gradebook.user.first_name} {gradebook.user.last_name}</p> 
          <p>Students list</p>
          {gradebook.students.map((student) => (
          <li key={student.id}>
             <div>{student.first_name} {student.last_name}</div>
              </li>
        ))}

        
<p>Comments list</p>

{gradebook.comments_of_gradebook.map((comment) => (
          <li key={comment.id}>
             <div>{comment.content}</div>
              </li>
        ))}


    </div>
  );
}