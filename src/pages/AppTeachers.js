import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeachers,selectTeachers } from "../store/teachers";
import TeachersSearch from "../components/TeachersSearch";

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
             <div>{teacher.first_name} {teacher.last_name} <img src={teacher.image_url} style={{width: "100px",height: "height",}}></img> {teacher.gradebook ?<p>{teacher.gradebook.name}</p> :<p>Professor is available</p>}             
             </div>
              </li>
        ))}
      </ul>
    </div>
  );
}