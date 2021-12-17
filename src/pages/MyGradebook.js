import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,useHistory } from "react-router";
import { getMyGradebook, selectGradebook } from "../store/gradebooks"; //ovde sam dodao getMyGradebook
import {selectActiveUser } from "../store/auth";
import { createComment,deleteComment,throwComment,deleteGradebook } from "../store/gradebooks";

export default function MyGradebook() {
  const dispatch = useDispatch();
//   const { id } = useParams();
 const history = useHistory();

const [commentData, setCommentData] = useState({
    content: "",
  });

const activeUser = useSelector(selectActiveUser);
console.log('activeUser',activeUser);
console.log('activeUser_id',activeUser?.id);

const gradebook= useSelector(selectGradebook);

console.log("My gradebook page", { gradebook})

//   useEffect(() => {
//     dispatch(getGradebook(id));
//   }, [id]);

  useEffect(() => {
    dispatch(getMyGradebook());
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(
      createComment({
        // gradebook_id:id,  menja se
        gradebook_id:gradebook.id,
        comment: commentData,
      })
    );
    setCommentData({ ...commentData, content: '' })
  }

  const deleteComments = (comment_id) => {
       let response = window.confirm(
      "Are you sure you want to delete this comment ?\n Enter 'OK' if you are"
    );

    if (!response) {
      return;
    }
  dispatch(deleteComment(comment_id));
  dispatch(throwComment(comment_id));
  };

  const deleteGradebooks = (gradebook_id) => {
       let response = window.confirm(
      "Are you sure you want to delete this gradebook ?\n Enter 'OK' if you are"
    );

    if (!response) {
      return;
    }
  
 dispatch(
      deleteGradebook({
        id: gradebook_id,
        onSuccess: () => {
          history.push('/');
        },
      })
    );

  };


  return (
    <div>
{gradebook ? (
<div>
     <div> {activeUser?.id===gradebook.user?.id &&<button onClick={()=> history.push(`/gradebooks/${gradebook.id}/students/create`)}>Add New student</button>}</div> 
     <div> {activeUser?.id===gradebook.user?.id &&<button onClick={()=>deleteGradebooks(gradebook.id)}>Delete gradebook</button>}</div>
     <div> {activeUser?.id===gradebook.user?.id &&<button onClick={()=> history.push(`/gradebooks/${gradebook.id}/edit`)}>Edit gradebook</button>}</div>        
        <p>Name: {gradebook.name}</p>   
        <p>Profesor: {gradebook.user.first_name} {gradebook.user.last_name}</p> 
        <h3>Students list</h3>
        {gradebook.students.length ? (
          <ul>
          {gradebook.students.map((student) => (
            <li key={student.id}>
                <div>{student.first_name} {student.last_name}</div>
            </li>   
            ))}
        </ul>
         ) : (
        <div>No students</div>
      )}


<h3>Comments list</h3>

<ul>
{gradebook.comments_of_gradebook.map((comment) => (
          <li key={comment.id}>
             <div>{comment.content} - {comment.user.first_name} {comment.user.last_name} {activeUser?.id===comment.user?.id &&<button onClick={()=>deleteComments(comment.id)}>Delete Comment</button>}</div>
              </li>
        ))}
</ul>

<h1>Create Comment</h1>
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
 ) : (
        <div>No gradebook</div>
      )}

    </div>
  );
}