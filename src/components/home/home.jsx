// import React, { useState } from "react";
// import grade9Data from "../data/grade9-data.json";
// import grade10Data from "../data/grade10-data.json";
// import grade11Data from "../data/grade11-data.json";
// import grade12Data from "../data/grade12-data.json";
// import "./home.scss";

// const Home = () => {
//   const [gradeData, setGradeData] = useState([]);
//   const [chooseRoom, setChooseRoom] = useState("");

//   return (
//     <div className="home">
//       <h1>Home</h1>
//       <div>
//         <button onClick={() => setGradeData(grade9Data)}>Grade 9</button>
//         <button onClick={() => setGradeData(grade10Data)}>Grade 10</button>
//         <button onClick={() => setGradeData(grade11Data)}>Grade 11</button>
//         <button onClick={() => setGradeData(grade12Data)}>Grade 12</button>
//       </div>
//       {gradeData.map((value, key) => {
//         return (
//           <div className="group" key={key}>
//             <h1>{value.Title}</h1>
//             <p>Members: {value.Members}</p>
//             <button onClick={value.Room}>Join</button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";
import { Navigate, Redirect } from "react-router-dom";
import grade9Data from "../data/grade9-data.json";
import grade10Data from "../data/grade10-data.json";
import grade11Data from "../data/grade11-data.json";
import grade12Data from "../data/grade12-data.json";
import "./home.scss";

const Home = () => {
  const [gradeData, setGradeData] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleJoinRoom = (room) => {
    setSelectedRoom(room);
  };

  if (selectedRoom) {
    const { Grade, Subject } = selectedRoom;
    const gradeWithoutSpace = Grade.replace(/\s+/g, "");
    const subjectWithoutSpace = Subject.replace(/\s+/g, "");
    const url = `/home/${gradeWithoutSpace}/${subjectWithoutSpace}`;
    return <Navigate to={url} />;
  }

  return (
    <div className="home">
      <h1>Home</h1>
      <div>
        <button onClick={() => setGradeData(grade9Data)}>Grade 9</button>
        <button onClick={() => setGradeData(grade10Data)}>Grade 10</button>
        <button onClick={() => setGradeData(grade11Data)}>Grade 11</button>
        <button onClick={() => setGradeData(grade12Data)}>Grade 12</button>
      </div>
      {gradeData.map((value, key) => {
        return (
          <div className="group" key={key}>
            <h1>{value.Title}</h1>
            <p>Members: {value.Members}</p>
            <button onClick={() => handleJoinRoom(value)}>Join</button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
