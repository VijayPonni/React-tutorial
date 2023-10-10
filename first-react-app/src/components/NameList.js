import React from "react";
function NameList() {
  //   const persons = [
  //     { name: "Vijay", age: 22, skill: "Angular" },
  //     { name: "Sanjay", age: 22, skill: "React and workpress" },
  //     { name: "kathish", age: 26, skill: "Python, nestjs , networking and etc" },
  //   ];

  //   const personList = persons.map((person) => (
  //     <PersonComponent key={person.name} person={person} />
  //   ));

  const names = ["Vijay", "Ajith", "Surya"];

  const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);

  return <div>{nameList}</div>;
}

export default NameList;
