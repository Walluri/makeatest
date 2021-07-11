import React from "react";
import { Link } from "react-router-dom";
function RouteLink() {
  return (
    <div>
      <nav>
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
      </nav>
    </div>
  );
}

export default RouteLink;
