import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeachers,selectTeachers } from "../store/teachers";
import TeachersSearch from "../components/TeachersSearch";
import { Link } from "react-router-dom";

export default function AppTeachers() {
  const teachers = useSelector(selectTeachers);
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeachers());
  }, []);


  return (
    <div>
      <h1>App teachers</h1>
 <TeachersSearch />
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>
             <div><Link to={`/teachers/${teacher.id}`}>{teacher.first_name} {teacher.last_name}</Link> | {teacher.gradebook ?<p><Link to={`/gradebooks/${teacher.gradebook.id}`}>{teacher.gradebook.name}</Link></p> :<p>Professor is available</p>}<img src={teacher.image_url} style={{width: "100px",height: "height",}}></img>             
             </div>
              </li>
        ))}
      </ul>
    </div>
  );
}