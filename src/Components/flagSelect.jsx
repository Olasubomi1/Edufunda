import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const FlagSelect = () => {
  const [selected, setSelected] = useState("ZA");
  return (
    <ReactFlagsSelect
      selected={selected}
      onSelect={(code) => setSelected(code)}
      placeholder="Search for a country"
    />
  );
};

export default FlagSelect;
