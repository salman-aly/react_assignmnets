import React from "react";

import {
  Question_one,
  Question_obj,
  Question_arr,
  Question_obj_list,
  Question_complex,
} from "./components/Question1.jsx";

import { Question_Two } from "./components/Question2.jsx";
import User from "./components/users.jsx";
import Posts from "./components/Posts.jsx";

import "./App.css";

function App() {
  return (
    <div className="main-container">
      <div className="container">
        <div>
          <h2>React Assignments</h2>
          <h2>Question #1</h2>
        </div>
        <div className="main-contents">
          <div className="content">
            <Question_one />
          </div>
          <div className="content">
            <Question_obj />
          </div>
          <div className="content">
            <Question_arr />
          </div>
          <div className="content">
            <Question_obj_list />
          </div>
          <div className="content">
            <Question_complex />
          </div>
        </div>
        <div>
          <h2>Question #2</h2>
          <div className="content-paragraph">
            <Question_Two />
          </div>
          <h2>Question #3</h2>
          <div className="content-paragraph">
            <div>
              <User />
              <Posts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
