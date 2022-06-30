import React from "react";
import moment from "moment"; // data!

const Greeting = (props) => {
  // console.log(props);

  const yearsOld = moment(new Date()).diff(moment(props.birthDate), "years");
  // console.log(yearsOld);

  return (
    <div className="greeting">{`My name is ${props.firstName} ${props.lastName}. I'm ${yearsOld} years old`}</div>
  );
};

export default Greeting;
