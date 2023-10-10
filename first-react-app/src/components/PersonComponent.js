import React from "react";

function PersonComponent({ person, key }) {
  return (
    <div>
      <p>
        {key} I am {person.name} . I am {person.age} years old. I Know{" "}
        {person.skill}
      </p>
    </div>
  );
}

export default PersonComponent;
