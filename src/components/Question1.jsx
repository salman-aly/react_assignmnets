import React from "react";

const name = "Hello World";

function Question_one() {
  return (
    <div className="app">
      <div className="appTwo">
        <div>
          <h2>{name}</h2>
        </div>
      </div>
    </div>
  );
}

const obj = { name: "Hello World Object" };
function Question_obj() {
  return (
    <div className="app">
      <div className="appTwo">
        <div>
          <h2>{obj.name}</h2>
        </div>
      </div>
    </div>
  );
}

const data = ["We", "are", "United"];
function Question_arr() {
  return (
    <div className="app">
      <div className="appTwo">
        <div>
          {data.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

const list = [
  { name: "Hello World 1" },
  { name: "Hello World 2" },
  { name: "Hello World 3" },
];

function Question_obj_list() {
  return (
    <div>
      {list.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
    </div>
  );
}

const complex = [
  { company: "XYZ", jobs: ["Javascript", "React"] },
  { company: "ABC", jobs: ["AngularJs", "Ionic"] },
];

function Question_complex() {
  return (
    <div>
      {complex.map((item, index) => (
        <p key={index}>
          {item.company}
          <br />
          {item.jobs}
        </p>
      ))}
    </div>
  );
}

export {
  Question_one,
  Question_obj,
  Question_arr,
  Question_obj_list,
  Question_complex,
};
