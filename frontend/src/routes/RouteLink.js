import React from "react";
import { Link } from "react-router-dom";
function RouteLink() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Create Test</Link>
        </li>
        <li>
          <Link to="/take">Take a Test</Link>
        </li>
        <li>
          <Link to="/list">List Tests</Link>
        </li>
      </ul>
    </div>
  );
}

export default RouteLink;
