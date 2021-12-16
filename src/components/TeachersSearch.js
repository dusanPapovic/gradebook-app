import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getTeachers } from "../store/teachers";
import _ from "lodash";

export default function TeachersSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  const search = () => {
    if (!searchTerm || searchTerm.length > 2) {
      dispatch(getTeachers(searchTerm));
    }
  };

  const debouncedChange = useCallback(
    _.debounce(handleChangeSearchTerm, 500),
    []
  );

  useEffect(() => {
    search();
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        onChange={debouncedChange}
        placeholder="Search teachers"
      />
    </div>
  );
}