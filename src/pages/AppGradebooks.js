import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGradebooks,selectGradebooks } from "../store/gradebooks";
import GradebooksSearch from "../components/GradebooksSearch";
import { Link } from "react-router-dom";


export default function AppGradebooks() {
  const gradebooks = useSelector(selectGradebooks);
  // const store = useSelector(state=>state)
  // console.log('store',store);
  // console.log('gradebooks',gradebooks);
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGradebooks({name:'',page:1}));
  }, []);

   const add = (pageNew) => {

   dispatch(getGradebooks({page:pageNew+1}));
  };

  return (
    <div>
      <h1>App gradebooks</h1>
      <GradebooksSearch />
      {gradebooks.data.length ? (
      <ul>
        {gradebooks.data.map((gradebook) => (
          <li key={gradebook.id}>
             <div><Link to={`/gradebooks/${gradebook.id}`}>{gradebook.name}</Link> | {gradebook ?(<Link to={`/teachers/${gradebook.user.id}`}>{gradebook.user.first_name} {gradebook.user.last_name}</Link>) : (
         <div>No teacher</div>
      )}| {gradebook.created_at.slice(0,10)}</div>
              </li>
        ))}
      </ul>
       ) : (
         <div>No gradebooks</div>
      )}
       {gradebooks.current_page!==gradebooks.last_page && <button onClick={()=>add(gradebooks.current_page)}>load more</button> }

    </div>
  );
}