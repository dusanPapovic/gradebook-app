import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,useHistory } from "react-router";
import { getGradebook, selectGradebook } from "../store/gradebooks";
import {selectActiveUser } from "../store/auth";
import { createComment } from "../store/gradebooks";

export default function Gradebook() {
  const dispatch = useDispatch();
  const { id } = useParams();
 const history = useHistory();

const [commentData, setCommentData] = useState({
    content: "",
  });

 const activeUser = useSelector(selectActiveUser);
console.log('activeUser',activeUser);
console.log('activeUser_id',activeUser.id);


  const gradebook= useSelector(selectGradebook);


  useEffect(() => {
    dispatch(getGradebook(id));
  }, [id]);

  if (!gradebook) {
    return null;
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(
      createComment({
        gradebook_id:id,
        comment: commentData,
      })
    );
    setCommentData({ ...commentData, content: '' })
  }

  return (
    <div>
      {activeUser?.id==gradebook.user?.id &&<button onClick={()=> history.push(`/gradebooks/${id}/students/create`)}>Add New Students</button>}
          <p>Name: {gradebook.name}</p>   
          <p>Profesor: {gradebook.user.first_name} {gradebook.user.last_name}</p> 
          <h3>Students list</h3>
          {gradebook.students.map((student) => (
          <li key={student.id}>
             <div>{student.first_name} {student.last_name}</div>
              </li>
        ))}


<h3>Comments list</h3>

{gradebook.comments_of_gradebook.map((comment) => (
          <li key={comment.id}>
             <div>{comment.content} - {comment.user.first_name} {comment.user.last_name}</div>
              </li>
        ))}

<h1>Create Student</h1>
      <form >
        <div>
          <input
            required
            maxLength='1000'
            placeholder="Content"
            value={commentData.content}
            onChange={({ target }) =>
              setCommentData({ ...commentData, content: target.value })
            }
          />
        </div>
        <button onClick={handleSubmit} >Submit</button>
      </form>

    </div>
  );
}