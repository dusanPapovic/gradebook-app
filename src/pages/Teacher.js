import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getTeacher, selectTeacher } from "../store/teachers";

export default function Movie() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const teacher = useSelector(selectTeacher);

  useEffect(() => {
    dispatch(getTeacher(id));
  }, [id]);

  if (!teacher) {
    return null;
  }
  return (
    <div>
      <h1>{teacher.first_name}</h1>
     <h1>{teacher.last_name}</h1>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <img width="300" src={teacher.image_url} alt="pic-any" />
      </div>
      <p>{teacher.gradebook.name}</p>
       <p>Numbers students:{teacher.gradebook.students.length}</p>
    </div>
  );
}