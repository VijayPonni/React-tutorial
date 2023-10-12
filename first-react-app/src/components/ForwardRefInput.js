import React from "react";

// function ForwardRefInput() {
//   return (
//     <div>
//       <p>Forward Ref Input Component</p>
//       <input type="text" />
//     </div>
//   );
// }

const ForwardRefInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <p>Forward Ref Input Component</p>
      <input type="text" ref={ref} />
    </div>
  );
});

export default ForwardRefInput;
