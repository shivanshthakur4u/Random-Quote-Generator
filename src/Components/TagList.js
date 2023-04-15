import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Homepage.css";

const TagList = ({ onSelect }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      const response = await axios.get("https://api.quotable.io/tags");
      setTags(response.data);
    };
    fetchTags();
  }, []);

  return (
    <div className="dropdown">
      <div className="select-wrapper">
        <select id="tag-select" onChange={(e) => onSelect(e.target.value)}>
          <option value="">Select a tag...</option>
          {tags.map((tag) => (
            <option key={tag._id} value={tag.name}>
              {tag.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TagList;
