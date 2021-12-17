import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createGradebook } from "../store/gradebooks";
import { getFreeTeachers,selectFreeTeachers } from "../store/teachers";
import { useEffect } from "react";


export default function CreateGradebook() {
  const history = useHistory();

  const dispatch = useDispatch();
  const freeTeachers = useSelector(selectFreeTeachers);
  const [gradebookData, setGradebookData] = useState({
    name: "",
    user_id: "",
  });

 useEffect(() => {
    if(freeTeachers.length) setGradebookData({...gradebookData,user_id:freeTeachers[0].id})
  }, [freeTeachers]);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(
      createGradebook({
        gradebook: gradebookData,
        onSuccess: () => {
          history.push(`/`);
        },
      })
    );
  }

useEffect(() => {
    dispatch(getFreeTeachers());
  }, []);

  return (
    <div>
        <h1>Create Gradebook</h1>
      <form >
        <div>
          <input
            required
            minLength='2'
            placeholder="Name"
            value={gradebookData.name}
            onChange={({ target }) =>
              setGradebookData({ ...gradebookData, name: target.value })
            }
          />
        </div>

        <select
          onChange={({ target }) =>
            setGradebookData({ ...gradebookData, user_id: target.value })
          }
          value={freeTeachers.length  && freeTeachers[0].user_id}
        //   defaultInputValue={gradebookData[0].user_id}
        >
          {freeTeachers.map((teacher) => (
            <option key={teacher.id} value={teacher.id}>
              {teacher.first_name} {teacher.last_name}
            </option>
          ))}
        </select>
        <button onClick={handleSubmit} >Submit</button>
      </form>
       <button onClick={()=> history.push(`/`)} >Cancel</button>
    </div>
  );
}