import React from "react";

function Checkbox() {
  const [checked, setChecked] = React.useState(true);

  return (
    <label>
      <input type="checkbox"
        // defaultChecked={!checked}
        onChange={() => setChecked(!checked)}
      />
    </label>
  );
}

export default Checkbox;
