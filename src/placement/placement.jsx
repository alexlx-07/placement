
import React, { useEffect, useState } from 'react';
import './placement.css';
import { placementdata } from './placementdata';

export default function Placement() {
  console.log("Hello")
  const [place, setPlace] = useState([]);

  useEffect(() => {
    setPlace(placementdata);
  }, []);

  return (
    <>
    <h1 style={{textAlign:'center'}}>Our Students Got <span className='high'> Placed</span> in Top Companies</h1>
        <div className="placement-container">
    

        <div className="scroll-track">
  {place.map((students) => (
    <div className="card" key={`first-${students.id}`}>
      <img className="img" src={students.img} alt={students.name} />
      <h3 className="name">{students.name}</h3>
      <p className="role">{students.role}</p>
      <p className="company">{students.company}</p>
    </div>
  ))}

  {/* duplicate for seamless scroll */}
  {place.map((students) => (
    <div className="card" key={`second-${students.id}`}>
      <img className="img" src={students.img} alt={students.name} />
      <h3 className="name">{students.name}</h3>
      <p className="role">{students.role}</p>
      <p className="company">{students.company}</p>
    </div>
  ))}
  </div>
  </div>
      
    </>
  );
};



// -------------------------
// StudentPlacement.jsx

// import React from "react";
// import './placement.css';
// import { placementdata } from './placementdata';

// const StudentCard = ({data}) => {
//   // console.log(data)
//   return (
//     <div className="sp-card">
//       <div className="sp-avatar">
//         <img src={data.img} alt={data.student_name} />
//       </div>
//       <div className="sp-name">{data.name}</div>
//       <div className="sp-company">{data.company}</div>
//       <div className="sp-role">Role : {data.role}</div>
//     </div>
//   );
// };


// export default function Placement() {

//   return (
//     <section className="sp-section">
//       <div className="sp-header">
//         <h2>
//           Our Students <span className="highlight">Got Placed</span> in Top Companies
//         </h2>
//         <p className="sub">
//           Real success stories from our classroom learners who started their IT careers after training at Code99.
//         </p>
//       </div>

//       {/* scrolling */}
//       <div className="sp-slider-wrap">
//         <div className="sp-slider">
//           {placementdata.map((student, index) => (
//             <StudentCard key={index} data={student} />
//           ))}
//         </div>
//       </div>

//       {/* <p className="hint">Hover over the slider to pause</p> */}
//     </section>
//   );
// }