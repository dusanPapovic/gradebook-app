import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGradebooks,selectGradebooks } from "../store/gradebooks";

export default function AppGradebooks() {
  const gradebooks = useSelector(selectGradebooks);
  
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGradebooks());
  }, []);


  return (
    <div>
      <h1>App gradebooks</h1>

      <ul>
        {gradebooks.data.map((gradebook) => (
          <li key={gradebook.id}>
             <div>{gradebook.name} | {gradebook.user.first_name} {gradebook.user.last_name} | {gradebook.created_at}</div>
              </li>
        ))}
      </ul>
      <button>Load more</button>
    </div>
  );
}